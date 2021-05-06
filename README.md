# sveather

The complete library of [Feather icons](https://feathericons.com/) as uncompiled Svelte components.

## Features

- 🍓 Type definitions for editor support
- 🍉 Installs as a dev dependency
- 🥦 100% ES modules = 100% tree shakeable
- 🥕 Works on the client and the server (SvelteKit & Sapper)
- 🍇 Feature list includes fruit and vegetable emojis

## Install

```sh
yarn add -D sveather
# OR
npm i --save-dev sveather
```

## Component names

Following the Svelte convention, a sveather component is named as the [PascalCase](https://techterms.com/definition/pascalcase) of a feather icon.

For example:

| feather icon name | sveather component name |
| ----------------- | ----------------------- |
| activity          | Activity                |
| alert-circle      | AlertCircle             |
| arrow-down-right  | ArrowDownRight          |

Browse all available icons with their feather names [here](https://feathericons.com/).

## Use

```svelte
<script>
  import { Github } from 'sveather'
</script>

<Github width={1} stroke="#333" />
```

## Performance

For the best development experience with the fastest builds, use a modern build tool such as [Vite](https://github.com/vitejs/vite) or [Snowpack](https://github.com/snowpackjs/snowpack).

## Props

### Default

**Note:** A `class` prop is not set by default. This is a departure from feather but is intended to give you, the developer, complete control and not pollute the DOM with potentially unused classes. You can of course optionally provide a `class` prop and target it via global stylesheet if you wish.

| prop            | type             | default value    | description     |
| --------------- | ---------------- | ---------------- | --------------- |
| width           | string \| number | `24`             | viewport width  |
| height          | string \| number | `24`             | viewport height |
| viewBox         | string           | `"0 0 24 24"`    | viewbox         |
| fill            | string           | `"none"`         | fill color      |
| stroke          | string           | `"currentColor"` | stroke color    |
| stroke-width    | string \| number | `2`              | stroke width    |
| stroke-linecap  | string           | `"round"`        | linecap         |
| stroke-linejoin | string           | `"round"`        | linejoin        |

### Additional

Any additional props can be provided.

Type support exists for all standard SVG attributes as defined in [DefinitelyTyped/react](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts)—this includes [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#what_is_wai-aria) attributes.

## Slots

Each sveather component contains a [slot](https://svelte.dev/tutorial/slots) for receiving any number of nested HTML elements or Svelte components.

For example, if an icon is being used as an image (as opposed to a link or a button) and needs be recognized by screen readers, you might achieve this as follows:

```svelte
<Github role="img" aria-labelledby="github-icon-title github-icon-desc">
  <title id="github-icon-title">GitHub Octocat</title>
  <desc id="github-icon-desc">Open source the world!</desc>
</Github>
```
