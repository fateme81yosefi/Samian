  const Reducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TO_CART":
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
  