import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  EDIT_QUANTITY_ITEM,
} from "./itemTypes";
import image_1 from "../resources/photo1.png";
import image_2 from "../resources/photo2.png";
const initialState = {
  total: 148.98,
  shipping: 19,
  items: [
    {
      image: image_1,
      name: "Vintage Backbag",
      price: 54.99,
      discount: 94.99,
      quantity: 1,
    },
    {
      image: image_2,
      name: "Levi Shoes",
      price: 74.99,
      discount: 124.99,
      quantity: 1,
    },
  ],
};
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload),
      };
    case EDIT_QUANTITY_ITEM:
      const newItems = state.items.map((item) => {
        if (item.name === action.payload.name) {
          const newQuantity = item.quantity + action.payload.quantity;
          if (newQuantity >= 0) {
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        }
        return item;
      });
      const newTotal = calculateTotal(newItems);
      return {
        ...state,
        items: newItems,
        total: newTotal,
      };
    default:
      return state;
  }
};

const calculateTotal = (items) => {
  let total = 0;
  items.forEach((element) => {
    total = total + element.price * element.quantity;
  });

  return total;
};
export default itemReducer;
