export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

export const updateData = (uniqueid, isImportant) => ({
  type: 'UPDATE_DATA',
  payload: [{uniqueid:data.uniqueid , isImportant:data.isImportant}],
})
