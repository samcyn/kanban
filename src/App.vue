<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
</script>
<template>
  <h1>App</h1>
  <div class="w-80 m-auto dark">
  <app-input label="Man's got bars" placeholder="hello it's me" :has-error="true" />
  </div>
</template>