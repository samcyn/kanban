import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia';

import { IBoard } from '@/models';

import BoardService from '@/services/BoardService';
import { logger } from '@/utils/logger';

export const useBoardStore = defineStore('BoardProvider', () => {
  const boardService = new BoardService();
  const boards = ref<IBoard[]>([]);

  onMounted(async () => {
    if (boards.value.length === 0) {
      try {
        const response = await boardService.getBoards();
        boards.value = response.data;
      } catch (err) {
        logger.error(err);
      }
    }
  });

  const onCreateBoard = async (board: IBoard) => {
    // create a temporary id
    const elementId = String(Date.now());

    // existing boards
    const activeBoards = boards.value;

    const record: IBoard = {
      ...board,
      id: elementId,
    };
    // set up optimistic ui
    boards.value = [...activeBoards, record];
    try {
      await boardService.createNewBoard(record);
    } catch (err) {
      logger.log(err);
      // if it fails reverse the optimistic ui process
      boards.value = [...activeBoards, record];
    }
  }

  return {
    boards,
    onCreateBoard
  };
})