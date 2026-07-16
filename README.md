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

Your configs will be appended at the end of configs array, resulting in more cpecificity over the old rules.
