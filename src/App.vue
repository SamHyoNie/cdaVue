<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <HelloWorld msg="Vite + Vue" />
  <button class="btn btn-outline">Default</button>
  <button class="btn btn-outline btn-primary">Primary</button>
  <button class="btn btn-outline btn-secondary">Secondary</button>
  <button class="btn btn-outline btn-accent">Accent</button>
  <button class="btn btn-outline btn-info">Info</button>
  <button class="btn btn-outline btn-success">Success</button>
  <button class="btn btn-outline btn-warning">Warning</button>
  <button class="btn btn-outline btn-error">Error</button>
  <AppFooter />
</template>

<style scoped></style>
