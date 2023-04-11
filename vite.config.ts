import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import checker from "vite-plugin-checker";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),
	imagetools(),
	checker({ typescript: true }),
	viteCompression(), // Compress files with gzip
	viteCompression({ algorithm: 'brotliCompress', ext: '.br' }) // Compress files with brotli
	],
	base: '/', // Base public path when served in development or production
});
