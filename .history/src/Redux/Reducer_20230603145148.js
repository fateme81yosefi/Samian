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

    case 'UPDATE_PERSON_NAME':
      const updatedPeople = state.data.map(data => {
        if (data.id === action.payload.id) {
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