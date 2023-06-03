

export const setText = (text) => ({
    type: 'SET_TEXT',
    payload: text
  })
 
export const getData = () => dispatch => {
  dispatch({
      type: GET_DATA,
      payload: data
  });
};