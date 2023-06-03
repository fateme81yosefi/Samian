  const Reducer = (state = [], action) => {
    switch (action.type) {
      case "SET_TEXT":
        return [...state, action.payload]; 
      default:
        return state
    }
  }
  
  export default Reducer
  