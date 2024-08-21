import {defineConfig} from 'vite'
import viteReact from '@vitejs/plugin-react'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import path from "path";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    // for simultaneous running development, you need disable HMR.
    const isDevSpa = mode === 'development-spa';

    // for create build and can run with parent or standalone.
    const isBuildSpaStandalone = mode === 'production-spa-standalone';

    return {
        base: "http://localhost:4174",
        plugins: [
            TanStackRouterVite(),
            viteReact(),
            vitePluginSingleSpa({
                type: 'mife',
                projectId: 'mf-portal',
                serverPort: 4174,
                spaEntryPoints: 'src/sspa-main.tsx',
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            chunkSizeWarningLimit: 1600,
            outDir: 'build',
            target: 'esnext',
            rollupOptions: {
                preserveEntrySignatures: 'strict',
                ...(isBuildSpaStandalone ? {
                    input: {
                        index: 'index.html',
                    }
                } : {
                    external: ['react', 'react-dom', 'clerk-react'],
                }),
            },
        },
        server: {
            hmr: !isDevSpa
        }
    }
})
