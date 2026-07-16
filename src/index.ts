import type { Linter } from "eslint";
import pluginEslint from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import globals from "globals";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import pluginImport from "eslint-plugin-import-lite";

const IGNORES = {
	ignores: ["**/dist", "**/node_modules", "**/.vercel", "**/.netlify", "**/public"],
} satisfies Linter.Config;

const JAVASCRIPT = {
	...pluginEslint.configs.recommended,
	languageOptions: {
		ecmaVersion: 2024,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			ecmaVersion: 2024,
			sourceType: "module",
		},
		sourceType: "module",
		globals: {
			...globals.browser,
			...globals.es2024,
			...globals.node,
			document: "readonly",
			navigator: "readonly",
			window: "readonly",
		},
	},
	linterOptions: {
		reportUnusedDisableDirectives: true,
	},
} satisfies Linter.Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractRules(config: any) {
	const array = Array.isArray(config) ? config : [config];
	const object = array.reduce((acc, item) => {
		return { ...acc, ...item.rules };
	}, {});
	return object;
}

const TYPESCRIPT = {
	name: "@typescript-eslint",
	plugins: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		"@typescript-eslint": pluginTs as any,
	},
	files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
	languageOptions: {
		parser: parserTs,
		parserOptions: {
			sourceType: "module",
		},
	},
	rules: {
		...extractRules(pluginTs.configs["flat/recommended"]),
		...extractRules(pluginTs.configs["flat/strict"]),

		"constructor-super": "off",
		"getter-return": "off",
		"no-const-assign": "off",
		"no-dupe-args": "off",
		"no-dupe-class-members": "off",
		"no-dupe-keys": "off",
		"no-func-assign": "off",
		"no-import-assign": "off",
		"no-new-symbol": "off",
		"no-obj-calls": "off",
		"no-redeclare": "off",
		"no-setter-return": "off",
		"no-this-before-super": "off",
		"no-undef": "off",
		"no-unreachable": "off",
		"no-unsafe-negation": "off",
		"no-var": "error",
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"valid-typeof": "off",
		"no-unused-vars": "off",

		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				disallowTypeAnnotations: false,
				prefer: "type-imports",
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				args: "after-used",
				argsIgnorePattern: "^_",
				ignoreRestSiblings: true,
				vars: "all",
				varsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-import-type-side-effects": "error",
	},
} satisfies Linter.Config;

const IMPORTS = {
	name: "import",
	plugins: {
		import: pluginImport,
	},
	rules: {
		"import/first": "error",
		"import/no-duplicates": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-default": "error",
	},
} satisfies Linter.Config;

const DEFAULT_CONFIG: Linter.Config[] = [gitignore({ strict: false }), IGNORES, JAVASCRIPT, TYPESCRIPT, IMPORTS];

export default function withTimbic(configs?: Linter.Config[]): Linter.Config[] {
	if (configs === undefined) return DEFAULT_CONFIG;

	DEFAULT_CONFIG.push(...configs);
	return DEFAULT_CONFIG;
}
