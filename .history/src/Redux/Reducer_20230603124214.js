  const Reducer = (state = [], action) => {
    switch (action.type) {
      case "SET_TEXT":
        return [...state, action.payload];
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
  