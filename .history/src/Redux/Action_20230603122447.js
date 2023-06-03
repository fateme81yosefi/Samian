

export const setText = (dataArray) => ({
    type: 'SET_TEXT',
    payload: dataArray
  })
  export const getData = () => ({
    type: 'GET_DATA',
    ...state,
    Text: action.payload  })
