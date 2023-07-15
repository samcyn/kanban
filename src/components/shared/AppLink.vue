<script setup lang="ts">
import { RouterLinkProps, RouteLocationRaw } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends RouterLinkProps {
  to: RouteLocationRaw;
}

// set defaults props
withDefaults(defineProps<Props>(), {});
</script>
<template>
  <router-link :to="to"><slot /></router-link>
</template>