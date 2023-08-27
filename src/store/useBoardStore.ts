import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia';

import { IBoard } from '@/models';

import BoardService from '@/services/BoardService';

export const useBoardStore = defineStore('BoardProvider', () => {
  const boardService = new BoardService();
  const boards = ref<IBoard[]>([]);

  onMounted(async () => {
    if (boards.value.length === 0) {
      try {
        const response = await boardService.getBoards();
        boards.value = response.data;
      } catch (err) {
        console.log(err, 122);
      }
    }
  });

  return {
    boards,
  };
})