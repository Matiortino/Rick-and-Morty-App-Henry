import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actions-types";

export const addFav = (payload) => ({
    type: ADD_FAV,
    payload,
    }
);

export const removeFav = (id) =>({
    type :REMOVE_FAV,
    payload: id
    }
);

export const filterCards = (payload) => {
    return {
      type: FILTER_CARDS,
      payload,
    };
}
  
  export const orderCards = (payload) => {
    return {
      type: ORDER_CARDS,
      payload,
    };
}