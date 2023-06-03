
import data from '../Data/data.json';

export const setText = (dataArray) => ({
    type: 'SET_TEXT',
    payload: dataArray
  })
  export const getData = (dataArray) => ({
    type: 'GET_DATA',
    payload: dataArray
  })
