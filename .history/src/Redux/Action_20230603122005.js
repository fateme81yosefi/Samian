
import data from '../../Data/data.json';

export const setText = (text) => ({
    type: 'SET_TEXT',
    payload: text
  })
  export const getData = (text) => ({
    type: 'GET_DATA',
    payload: text
  })
  export const fetchData = () => {
    return (dispatch) => {
      const dataObject = JSON.parse(JSON.stringify(data));
      const dataArray = dataObject.myData;
      dispatch({ type: 'SET_DATA', payload: dataArray });
    }
  }