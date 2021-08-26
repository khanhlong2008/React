var initialState = [
  {
    priceSalad: 10,
    priceCheese: 20,
    priceMeat: 25,
    priceBacon: 28,
  },
];
const custom = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default custom;
