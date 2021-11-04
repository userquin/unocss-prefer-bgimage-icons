import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import UnoCss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import Icons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
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
      })
  ]
})
