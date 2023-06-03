
export const setText = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
  export const getData = () => ({
    type: 'GET_DATA',
  })
 