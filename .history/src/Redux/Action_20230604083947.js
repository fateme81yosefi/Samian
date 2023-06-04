export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})
export const updateImportant = (uniqueid, isImportant) => ({
  type: 'UPDATE_ISIMPORTANT',
  payload: { uniqueid, isImportant },
});

export const addToData = (data) => ({
  type: 'ADD_TO_DATA',
  payload:data 
});