const initialState = {
  data: [],
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      }

      case 'UPDATE_Da':
        return {
          ...state,
          data: {
            isImportant: action.isImportant,
            ...state.data,
          }
        }
    default:
      return state
  }
}
export default rootReducer