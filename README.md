# @timbic/eslint-config

Extensible eslint flat configuration for the smart developers.

## Usage

```bash
pnpm add -D eslint @timbic/eslint-config
```

```mjs
import withTimbic from "@timbic/eslint-config";

export default withTimbic();

// or

export default withTimbic([
	// your eslint configs
]);
```

Your configs will be appended at the end of configs array, resulting in more specificity over the default rules.

## What's Included

This config provides a comprehensive ESLint setup with the following rule sets:

- JS recommended rules by ESLint and the community
- Support for TS rules for the projects that use TS
- Opinionated ESM import rules

Our config also automatically ignores:

- `dist/`
- `node_modules/`
- `.vercel/`
- `.netlify/`
- `public/`

as well as Git-ignored files (via `eslint-config-flat-gitignore`)

## Inspect the config

You can use this command to inspect all the rules and configs inside your resolved flat configuration.

```bash
pnpm dlx @eslint/config-inspector
```
