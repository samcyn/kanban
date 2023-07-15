<script setup lang="ts">
import AppIcon from '@/components/shared/AppIcon.vue';
import AppLink from '@/components/shared/AppLink.vue';
</script>
<template>
  <app-link
    class="flex text-black-100 dark:text-grey-300"
    to="/"
    aria-label="kanban"
  >
    <app-icon class-name="hidden md:inline" icon="logo" width="153" height="26" />
    <app-icon class-name="md:hidden" icon="logo-mobile" width="24" height="25" />
  </app-link>
</template>