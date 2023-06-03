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
      const updatedPeople = state.people.map(person => {
        if (person.id === action.payload.id) {
          return { ...person, name: action.payload.newName }
        } else {
          return person
        }
        })
    default:
      return state
  }
}
export default rootReducer