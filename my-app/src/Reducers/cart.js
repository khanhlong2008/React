import * as Types from "./../Constants/ActionTypes";

// var data = JSON.parse(localStorage.getItem("CART"));
// var initialState = data ? data : [];
var initialState = [
  {
    product: {
      id: 1,
      name: "iphone 12",
      img: "https://img.websosanh.vn/v2/users/root_product/images/dien-thoai-apple-iphone-12-pro/bf4dsxoa54r7x.jpg?compress=85",
      description: "san pham do apple san xuat",
      price: 500,
      inventory: 10,
      rating: 5,
    },
    quantity: 5,
  },
  {
    product: {
      id: 3,
      name: "vivo",
      img: "https://www.minhducvn.com/wp-content/uploads/2021/06/Y3S.png",
      description: "san pham do vivo san xuat",
      price: 300,
      inventory: 5,
      rating: 2,
    },
    quantity: 2,
  },
];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      return [...state];
    default:
      return [...state];
  }
};
var findProductInCart = (cart, product) => {
  var index = -1; // -1 co nghia la kh tim dc
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) index = i;
      break;
    }
  }
  return index;
};
export default cart;
