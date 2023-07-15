<template>
  <button :class="className" type="button" :aria-label="icon" @click="onClick">
    <app-icon
      :size="size"
      :color="color"
      :icon="icon"
      :view-box="viewBox"
      :height="height"
      :width="width"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, Events } from 'vue';

import AppIcon, { IconBaseDefaults } from '@/components/shared/AppIcon.vue';

export default defineComponent({
  name: 'AppIconButton',
  components: {
    AppIcon,
  },
  emits: { click: null },
  props: {
    ...IconBaseDefaults,
  },
  setup(_props, context) {
    const onClick = (event: Events['onClick']) => {
      context.emit('click', event);
    };
    return {
      onClick,
    };
  },
});
</script>