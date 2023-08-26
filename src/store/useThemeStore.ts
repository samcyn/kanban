import { ref, Ref } from 'vue';
import { defineStore, StoreDefinition } from 'pinia';


export const useThemeStore = defineStore('counter', () => {
  const theme = ref<'dark' | 'light'>('light');

  function onToggle() {
    const body =
      document.getElementsByTagName('body')[0];
    if (body) {
      body.classList.toggle('dark');
    }
    if (theme.value === 'light') {
      theme.value = 'dark';
      return;
    }
    theme.value = 'light';
  };

  return {
    theme,
    onToggle,
  };
})