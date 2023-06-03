const initialState = {
  data: [],
}


const rootReducer = (state = i action) => {
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
export default rootReducer