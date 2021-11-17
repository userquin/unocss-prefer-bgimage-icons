import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { promises as fs } from 'fs'
import { resolveModule } from 'local-pkg'

import UnoCss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import Icons from '@unocss/preset-icons'
import Inspect from 'vite-plugin-inspect'

const collection = 'mdi'

const virtualIcons = (): Plugin => {
    const icons: string[] = []
    const camelToKebab = (key: string) => {
        const result = key
            .replace(/:/g, '-')
            .replace(/([A-Z])/g, ' $1')
            .trim()
        return result.split(/\s+/g).join('-').toLowerCase()
    }
    const resolveIcons = async() => {
        if (icons.length === 0) {
            const jsonPath = resolveModule(`@iconify-json/${collection}/icons.json`)
            const iconEntries = await JSON.parse(await fs.readFile(jsonPath, 'utf8'))
            const iconPromises = Object.keys(iconEntries.icons)/*.slice(0, 1000)*/.map(x => {
                return `i-${collection}-${camelToKebab(x)}`
            })
            icons.push(...iconPromises)
        }
    }
    return {
        name: 'custom-icons-collection',
        enforce: 'pre',
        async transform(code, id) {
            if (id.endsWith('src/App.vue')) {
                await resolveIcons()
                const index = code.indexOf('<div id="custom-icons-collection" />')
                if (index > -1) {
                    return `${code.slice(0, index)}${icons.slice(0, 25).map(i => `<div text-2xl m-2 property-font-size-margin ease-in class="${i}" tabindex="0" focus:text-4xl focus:m-0 hover="m-0 text-4xl cursor-pointer" />`).join('\n')}${code.slice(index + 36)}`
                }
            }
            return code
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  build: {
    manifest: true,
  },
  plugins: [
      virtualIcons(),
      vue(),
      UnoCss({
        presets: [
            Icons({
                prefix: 'i-',
                extraProperties: {
                    display: 'inline-block'
                },
                warn: true
            }),
            presetAttributify(),
            presetUno(),
        ]
      }),
      // https://github.com/antfu/vite-plugin-inspect
      Inspect({
          // change this to enable inspect for debugging
          enabled: process.env.DEV,
      }),
  ]
})
