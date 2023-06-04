export const setDataAction = (data) => ({
  type: 'SET_DATA',
  payload: data,
})
export const updateImportant = (uniqueid, isImportant) => ({
  type: 'UPDATE_ISIMPORTANT',
  payload: { uniqueid, isImportant },
});
function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}
export const addToData = (uniqueid, isImportant) => ({
  type: 'ADD_TO_DATA',
  payload: { uniqueid, isImportant },
});