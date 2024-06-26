import { Mode_Type } from "@/models/queryParamsModeType";

export const DEFAULT_TASK_ACTIONS: Mode_Type = {
  add: 'ADD_TASK_MODE',
  edit: 'EDIT_TASK_MODE',
  view: 'VIEW_TASK_MODE',
  delete: 'DELETE_TASK_MODE'
};

export const DEFAULT_BOARD_ACTIONS: Mode_Type = {
  add: 'ADD_BOARD_MODE',
  edit: 'EDIT_BOARD_MODE',
  view: 'VIEW_BOARD_MODE',
  delete: 'DELETE_BOARD_MODE'
};

// TODO - add features to edit and delete column
export const DEFAULT_COLUMN_ACTIONS: Mode_Type = {
  add: 'ADD_COLUMN_MODE',
  edit: 'EDIT_COLUMN_MODE',
  view: 'VIEW_COLUMN_MODE',
  delete: 'DELETE_COLUMN_MODE'
};