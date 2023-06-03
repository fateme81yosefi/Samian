export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})
const updateImportant = (uniqueid, isImportant) => ({
  type: UPDATE_ISIMPORTANT,
  payload: { id, isImportant },
});