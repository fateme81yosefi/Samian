const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}