export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

export const updatedItems = (uniqueid, isImportant) => {
  return {
    type: 'UPDATED_ITEMS',
    payload: { uniqueid, isImportant }
  }
}