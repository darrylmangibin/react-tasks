import { GET_DATA, LOADING, ADD_DATA, GET_ERROR, CLEAR_ERROR, REMOVE_DATA, EDIT_DATA } from './types';
import axios from '../axios';

export const getData = () => dispatch => {
  axios.get('/').then(res => {
    dispatch({
      type: LOADING
    })
    setTimeout(() => {
      dispatch({
        type: GET_DATA,
        payload: res.data
      })
    }, 500);
  })
}

export const addData = data => dispatch => {
  axios.post('/', data).then(res => {
    dispatch({
      type: ADD_DATA,
      payload: res.data
    })
  }).catch(err => {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data
    })
    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR
      })
    }, 3000);
  })
}

export const removeData = id => dispatch => {
  axios.delete(`/${id}`).then(res => {
    dispatch({
      type: REMOVE_DATA,
      payload: res.data
    })
  })
}

export const editData = (id, newData) => dispatch => {
  axios.put(`/${id}`, newData).then(res => {
    dispatch({
      type: EDIT_DATA,
      payload: res.data
    })
  })
}