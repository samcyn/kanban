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
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          data: boards as IBoard[]
        });
      }, 1000);
    });
  }

  public getColumnsInBoards(boardId: string): Promise<{ data: IColumn[] }> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        const board = boards.find(board => board.id === boardId);
        const columns = board ? board.columns as IColumn[] : [];
        resolve({
          data: columns,
        });
      }, 1000);
    });
  }
}
