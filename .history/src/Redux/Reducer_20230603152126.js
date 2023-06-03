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

      case actionTypes.UPDATE_USER_NAME:
        return {
          ...state,
          user: {
            name: action.name,
            ...state.user,
          }
        }
    default:
      return state
  }
}
export default rootReducer