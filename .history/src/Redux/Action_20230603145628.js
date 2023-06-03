export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

export const updatedItems = (id, isImportant) => {
  return {
    type: 'UPDATED_ITEMS',
    payload: { id, isImportant }
  }
}