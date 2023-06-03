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

      case 'UPDATE_DATA':
        return {
          ...state,
          data: {
            ...state.data,
            name: action.name,
          }
        }
    default:
      return state
  }
}
export default rootReducer