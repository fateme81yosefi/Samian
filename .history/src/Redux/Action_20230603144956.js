export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

const updatePersonName = (id, is) => {
  return {
    type: 'UPDATE_PERSON_NAME',
    payload: { id, newName }
  }
}