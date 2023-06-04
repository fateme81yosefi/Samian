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

      case 'UPDATE_ISIMPORTANT':
        return {
          ...state,
          data: state.data.map((item) =>
            item.uniqueid === action.payload.uniqueid
              ? { ...item, isImportant: action.payload.isImportant }
              : item
          ),
        };
        case 'ADD_TO_DATA':
          return {
            ...state,
            data: [...state.products, action.payload]
          };  
    default:
      return state
  }
}
export default rootReducer