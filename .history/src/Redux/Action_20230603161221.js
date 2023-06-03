export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})
exporconst updateImportant = (uniqueid, isImportant) => ({
  type: 'UPDATE_ISIMPORTANT',
  payload: { uniqueid, isImportant },
});