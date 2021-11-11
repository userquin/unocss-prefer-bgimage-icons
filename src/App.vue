<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(typeof window.XCapiApp !== 'undefined' ? window.XCapiApp.preferBgImageIcons(): true)
</script>

<template>
  <div h-full text-center flex select-none all:transition-400>
    <div ma>
      <div text-5xl fw100 animate-bounce>
        unocss
      </div>

      <div m-b4>
        <label for="switch">Switch to</label>
        <input text-2xl id="switch" type="checkbox" v-model="checked" />
      </div>

      <div p-4 c-purple-500 :prefer-gb-image-icons="checked ? true : null">
        <div id="custom-icons-collection" />
      </div>

    </div>
  </div>
</template>

<style>
[prefer-gb-image-icons] > [class^=i-] {
  mask: none !important;
  -webkit-mask: none !important;
  background-color: transparent !important;
  background: var(--un-icon) no-repeat;
  background-size: 100% 100%;
}
</style>
