// src/redux/actions.js
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

let nextTaskId = 0;

export const addTask = (text) => ({
  type: ADD_TASK,
  id: nextTaskId++,
  text,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const editTask = (id, text) => ({
  type: EDIT_TASK,
  id,
  text,
});
