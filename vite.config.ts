import {defineConfig, loadEnv} from 'vite'
import viteReact from '@vitejs/plugin-react'
import path from "path";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    // for simultaneous running development, you need disable HMR.
    const isDevSpa = mode === 'development-spa';

    // for create build and can run with parent or standalone.
    const isBuildSpaStandalone = mode === 'production-spa-standalone';

    const env = loadEnv(mode, process.cwd(), "");
    return {
        base: env.BASE_URL,
        preview: {
            port: Number(env.VITE_PORT),
        },
        server: {
            port: Number(env.VITE_PORT),
            hmr: !isDevSpa
        },
        plugins: [
            viteReact(),
            vitePluginSingleSpa({
                type: 'mife',
                projectId: 'mf-portal',
                serverPort: Number(env.VITE_PORT),
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
                } : {}),
            },
        }
    }
})
