import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia';


export const useThemeStore = defineStore('ThemeProvider', () => {
  const body =
    document.getElementsByTagName('body')[0];
  const theme = ref<'dark' | 'light'>('light');

  onMounted(() => {
    const saveTheme = localStorage.getItem('THEME');
    if (saveTheme) {
      theme.value = saveTheme as 'light' | 'dark';
      body.classList.add(saveTheme);
    }
  });
  function onToggle() {
    if (theme.value === 'light') {
      theme.value = 'dark';
      body.classList.replace('light', 'dark');
      localStorage.setItem('THEME', 'dark')
      return;
    }
    theme.value = 'light';
    body.classList.replace('dark', 'light');
    localStorage.setItem('THEME', 'light')
  };

  return {
    theme,
    onToggle,
  };
})