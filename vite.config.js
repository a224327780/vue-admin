import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: /^@\//,
                replacement: `${path.resolve(__dirname, 'src')}/`
            },
        ],
        extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css']
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ],
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
})
