
import data from '../../Data/data.json';

export const setText = (text) => ({
    type: 'SET_TEXT',
    payload: text
  })
  export const getData = (text) => ({
    type: 'GET_DATA',
    payload: text
  })