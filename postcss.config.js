import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import tailwindConfig from './tailwindcss.config.js'

export default {
    plugins: [tailwind(tailwindConfig), autoprefixer],
}