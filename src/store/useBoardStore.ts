import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia';

import { IBoard } from '@/models';
import { boards as Data } from '@/.data/data.json';

export const useBoardStore = defineStore('BoardProvider', () => {
  const boards = ref<IBoard[]>([]);

  onMounted(() => {
    if (boards.value.length === 0) {
      boards.value = Data as IBoard[];
    }
  });

  return {
    boards,
  };
})