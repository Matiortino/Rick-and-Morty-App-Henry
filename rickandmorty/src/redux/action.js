import { ADD_FAV, REMOVE_FAV } from "./actions-types";

export const addFav = (payload) => ({
    type: ADD_FAV,
    payload,
    }
);

export const removeFav = (id) =>({
    type :REMOVE_FAV ,
    payload: id,
    }
);

