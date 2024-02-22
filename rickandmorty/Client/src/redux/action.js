import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actions-types";

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {

    const {data} = await axios.post(endpoint, character);
    return dispatch({
      type: "ADD_FAV", 
      payload: data,
    });
  }
};

    //  axios.post(endpoint, character).then(({ data }) => {
    //     return dispatch({
    //        type: 'ADD_FAV',
    //        payload: data,
    //     });
    //  });

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    
    const {data} = await axios.delete(endpoint);
    return dispatch({
      type: "REMOVE_FAV",
      payload: data,
    });
  }
}
  


//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data,
//      });
//      });
//   };
// };

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