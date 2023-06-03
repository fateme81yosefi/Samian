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

      case 'UPDATE_USER_NAME':
        return {
          ...state,
          data: {
            isImportant: action.isImportant,
            ...state.user,
          }
        }
    default:
      return state
  }
}
export default rootReducer