const initialState =[{}]
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TEXT':
        return {
          ...state,
          text: action.payload
        }
      case 'GET_DATA':
          return {
              ...state,
              text: action.payload
          };
      default:
        return state
    }
  }
  
  export default Reducer
  