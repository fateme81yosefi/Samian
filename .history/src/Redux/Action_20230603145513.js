export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

const updatedItems = (id, isImportant) => {
  return {
    type: 'UPDATED_',
    payload: { id, isImportant }
  }
}