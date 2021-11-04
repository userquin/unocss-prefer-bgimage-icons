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

      <div ma c-purple-500 :prefer-gb-image-icons="checked ? true : null">
        <div class="i-mdi-account" text-2xl />
        <div class="i-mdi-account-alert" text-2xl />
        <div class="i-mdi-account-alert-outline" text-2xl />
        <div class="i-mdi-account-arrow-left" text-2xl />
        <div class="i-mdi-account-arrow-left-outline" text-2xl />
        <div class="i-mdi-account-arrow-right" text-2xl />
        <div class="i-mdi-account-arrow-right-outline" text-2xl />
        <div class="i-mdi-account-box" text-2xl />
        <div class="i-mdi-account-box-multiple" text-2xl />
        <div class="i-mdi-account-box-multiple-outline" text-2xl />
        <div class="i-mdi-account-box-outline" text-2xl />
        <div class="i-mdi-account-cancel" text-2xl />
        <div class="i-mdi-account-cancel-outline" text-2xl />
        <div class="i-mdi-account-cash" text-2xl />
        <div class="i-mdi-account-cash-outline" text-2xl />
        <div class="i-mdi-account-check" text-2xl />
        <div class="i-mdi-account-check-outline" text-2xl />
        <div class="i-mdi-account-child" text-2xl />
        <div class="i-mdi-account-child-circle" text-2xl />
        <div class="i-mdi-account-child-outline" text-2xl />
        <div class="i-mdi-account-circle" text-2xl />
        <div class="i-mdi-account-circle-outline" text-2xl />
        <div class="i-mdi-account-clock" text-2xl />
        <div class="i-mdi-account-clock-outline" text-2xl />
        <div class="i-mdi-account-cog" text-2xl />
        <div class="i-mdi-account-cog-outline" text-2xl />
        <div class="i-mdi-account-convert" text-2xl />
        <div class="i-mdi-account-convert-outline" text-2xl />
        <div class="i-mdi-account-cowboy-hat" text-2xl />
        <div class="i-mdi-account-details" text-2xl />
        <div class="i-mdi-account-details-outline" text-2xl />
        <div class="i-mdi-account-edit" text-2xl />
        <div class="i-mdi-account-edit-outline" text-2xl />
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
