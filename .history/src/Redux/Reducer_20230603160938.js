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
            item.id === action.payload.id
              ? { ...item, important: action.payload.isImportant }
              : item
          ),
        };
    default:
      return state
  }
}
export default rootReducer