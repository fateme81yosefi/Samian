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
      const updatedPeople =state.data.map(data => {
        if (data.uniqueid === action.payload.uniqueid) {
          return { ...data, isImportant: action.payload.isImportant }
        } else {
          return data
        }
        })
        return { ...state, data: updatedPeople }
    default:
      return state
  }
}
export default rootReducer