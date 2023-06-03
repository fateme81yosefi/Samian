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

    case 'UPDATED_ITEMS':
      state.data.map(data => {
        if (data.un === action.payload.id) {
          return { ...data, isImportant: action.payload.newName }
        } else {
          return data
        }
        })
    default:
      return state
  }
}
export default rootReducer