

export const setText = (dataArray) => ({
    type: 'SET_TEXT',
    payload: dataArray
  })
  case GET_DATA:
    return {
        ...state,
        data: action.payload
    };
