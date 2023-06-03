export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

const updatedItems = (id, isImportant) => {
  return {
    type: 'UPDATE_PERSON_NAME',
    payload: { id, isImportant }
  }
}