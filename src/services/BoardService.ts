// import { AxiosResponse } from 'axios';

import HttpClient from '@/services/index.ts';

import { boards } from '@/.data/data.json';
import { IBoard, IColumn } from '@/models';

export default class BoardService extends HttpClient {
  public constructor() {
    super('https://5f146de02710570016b380a5.mockapi.io/api/v1');
  }

  // public getBoards() {
  //   return this.get<IBoard, AxiosResponse<IBoard[]>>('/get');
  // }


  public getBoards(): Promise<{ data: IBoard[] }> {
    const board_sample = localStorage.getItem('BOARDS_SAMPLE');
    if (!board_sample) {
      localStorage.setItem('BOARDS_SAMPLE', JSON.stringify(boards));
    }
    const extractedBoards = JSON.parse(board_sample ? board_sample : '[]') as IBoard[];
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          data: extractedBoards.length > 0 ? extractedBoards : boards
        });
      }, 1000);
    });
  }

  public getColumnsInBoards(boardId: string): Promise<{ data: IColumn[] }> {
    const board_sample = localStorage.getItem('BOARDS_SAMPLE');
    return new Promise((resolve, _) => {
      setTimeout(() => {
        if (board_sample) {
          const extractedBoards = JSON.parse(board_sample ? board_sample : '[]') as IBoard[];
          const board = extractedBoards.find(board => board.id === boardId);
          const columns = board ? board.columns as IColumn[] : [];
          resolve({
            data: columns,
          });
        } else {
          resolve({
            data: [],
          });
        }
      }, 1000);
    });
  }

  public addColumnsToBoard(boardId: string, column: IColumn): Promise<{ data: IColumn }> {
    const board_sample = localStorage.getItem('BOARDS_SAMPLE');
    if (board_sample) {
      const extractedBoards = JSON.parse(board_sample ? board_sample : '[]') as IBoard[];
      const newBoards = extractedBoards.map(board => {
        if (board.id === boardId) {
          return {
            ...board,
            columns: [...board.columns, column]
          }
        }
        return board;
      });
      localStorage.setItem('BOARDS_SAMPLE', JSON.stringify(newBoards));
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: column
        });
      }, 1000);
    });
  }

  public createNewBoard(board: IBoard): Promise<{ data: IBoard }> {
    const board_sample = localStorage.getItem('BOARDS_SAMPLE');
    if (board_sample) {
      const extractedBoards = JSON.parse(board_sample ? board_sample : '[]') as IBoard[];
      localStorage.setItem('BOARDS_SAMPLE', JSON.stringify([...extractedBoards, board]));
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: board
        });
      }, 1000);
    });
  }
}
