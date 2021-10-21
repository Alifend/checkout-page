import { ADD_ITEM, DELETE_ITEM, EDIT_QUANTITY_ITEM } from "./itemTypes";
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const deleteItem = (name) => ({
  type: DELETE_ITEM,
  payload: name,
});

export const editQuantityItem = ({ name, quantity }) => ({
  type: EDIT_QUANTITY_ITEM,
  payload: { name, quantity },
});
