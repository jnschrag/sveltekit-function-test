import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';

export function vitePluginSvelteH2J() {
	const require = createRequire(import.meta.url);
	return {
		name: 'css-tree-resolver', // name of the plugin
		resolveId(id) {
			if (id === 'css-tree') {
				return require.resolve('./node_modules/css-tree/dist/csstree.esm.js');
			}
		}
	};
}

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	build: {
		reportCompressedSize: false,
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name][extname]',
				chunkFileNames: 'assets/[name].js'
			}
		}
	},
	plugins: [svelte(), vitePluginSvelteH2J()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
        @use "${__dirname}/src/scss/abstracts" as *;
        `
			}
		}
	}
});
