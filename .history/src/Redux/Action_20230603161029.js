export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})
const updateImportant = (id, isImportant) => ({
  type: UPDATE_IMPORTANT,
  payload: { id, isImportant },
});