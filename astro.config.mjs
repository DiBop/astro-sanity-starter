import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwind from '@astrojs/tailwind';
import { sanityConfig } from './src/utils/sanity-client';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    image: {
        domains: ['cdn.sanity.io']
    },
    integrations: [
        sanity(sanityConfig),
        tailwind({
            applyBaseStyles: false
        })
    ],
    output: "static",
    adapter: netlify(),
    vite: {
        server: {
            hmr: { path: '/vite-hmr/' }
        }
    },
    server: {
        port: 3000
    }
});
