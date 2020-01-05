import { FILTER_DATA, HIDE_COMPLETED } from './types';

export const filterData = text => {
  return {
    type: FILTER_DATA,
    payload: text
  }
}

export const hideCompleted = val => {
  return {
    type: HIDE_COMPLETED,
    payload: val
  }
}