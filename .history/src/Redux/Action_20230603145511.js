export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

const updatedItems = (id, isImportant) => {
  return {
    type: 'UPDATED',
    payload: { id, isImportant }
  }
}