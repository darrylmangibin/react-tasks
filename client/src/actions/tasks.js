import { GET_DATA } from './types';
import axios from '../axios';

export const getData = () => dispatch => {
  axios.get('/').then(res => {
    console.log(res)
    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  })
}