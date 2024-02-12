# sveltekit-function-test

Test repo for Sveltekit & Netlify background functions. Demo of issue [#6106](https://github.com/netlify/cli/issues/6106)

## Issue summary

If you have `included_files = ['chart_template/**']` in your `netlify.toml` when running the project locally, the Netlify functions server fails to build the function due to a symlink error.

```bash
◈ Failed to load function publish-chart-background: ENOENT: no such file or directory, symlink '../acorn/bin/acorn' -> '/Users/jacqueschrag/Desktop/sveltekit-function-test/.netlify/functions-serve/publish-chart-background/chart_template/node_modules/.bin/acorn'
◈ Failed to load function sveltekit-render: ENOENT: no such file or directory, symlink '../d3-dsv/bin/dsv2json.js' -> '/Users/jacqueschrag/Desktop/sveltekit-function-test/.netlify/functions-serve/sveltekit-render/chart_template/node_modules/.bin/tsv2json'
```

This error goes away if you remove the `included_files` line, but this is necessary for a successful production deploy.

### Workaround

I've also included my workaround, which is adding the included files via a plugin.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

In a separate terminal, start the Netlify functions server.

````bash
netlify functions:serve
```

## Building

To create a production version of your app:

```bash
npm run build
````

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
