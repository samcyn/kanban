import { computed, ref, nextTick } from 'vue';
import { defineStore } from 'pinia';

import { IColumn } from '@/models';

import BoardService from '@/services/BoardService';
import { logger } from '@/utils/logger';

export const useColumnStore = defineStore('ColumnProvider', () => {
  const boardService = new BoardService();
  const isBusy = ref(false);
  const activeColumns = ref<IColumn[]>([]);

  const getActiveColumnsInABoard = async (id: string) => {
    isBusy.value = true;
    try {
      const response =
        await boardService.getColumnsInBoards(id);
      activeColumns.value = response.data;
      isBusy.value = false;
    } catch (err) {
      activeColumns.value = [];
      logger.error(err);
    }
  };

  const addColumnToBoard = async (boardId: string, col: IColumn) => {
    // create a temporary id
    const elementId = String(Date.now());

    const record: IColumn = {
      ...col,
      id: elementId,
    };

    const currentActiveColumns = activeColumns.value;

    // optimistic ui set up here
    activeColumns.value = [...currentActiveColumns, record];

    // scroll new column into view
    nextTick(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })
      }
    });

    try {
      await boardService.addColumnsToBoard(boardId, col);
    } catch (err) {
      logger.log(err);
      // if it fails reverse the optimistic ui process
      activeColumns.value = [...currentActiveColumns];
    }
  }

  const isEmptyColumns = computed(
    () => activeColumns.value.length === 0
  );

  return {
    isBusy,
    activeColumns,
    isEmptyColumns,
    getActiveColumnsInABoard,
    addColumnToBoard
  };
})