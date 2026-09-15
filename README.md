# @timbic/eslint-config

<p>
  <a href="https://www.npmjs.com/package/@timbic/eslint-config"><img src="https://img.shields.io/npm/v/@timbic/eslint-config.svg?logo=nodedotjs" alt="npm package"></a>
  <a href="https://github.com/Timbic/eslint-config"><img src="https://img.shields.io/badge/Github-gray.svg?logo=github" alt="github repo"></a>
</p>

Extensible ESLint flat configuration for smart developers.

## Usage

```bash
pnpm add -D eslint @timbic/eslint-config
```

```ts
// eslint.config.{js,mjs,ts,mts}
import withTimbic from "@timbic/eslint-config";

export default withTimbic();

// or

export default withTimbic([
	// your eslint configs
]);
```

Your configs will be appended at the end of the array, so they take precedence over the default rules.

## What's Included

This config provides a comprehensive ESLint setup with the following rule sets:

- JS recommended rules from ESLint and the community
- TS rules for projects that use TypeScript
- Opinionated ESM import rules

Our config also automatically ignores:

- `dist/`
- `node_modules/`
- `.vercel/`
- `.netlify/`
- `public/`

as well as Git-ignored files (via `eslint-config-flat-gitignore`)

## Inspect the config

You can use this command to inspect all the rules and configs in your resolved flat configuration.

```bash
pnpm dlx @eslint/config-inspector
```
