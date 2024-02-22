import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { filterCards, orderCards, removeFav } from "../../redux/action";

const Favorites = (props) => {

  const [aux, setAux] = useState(false);

  const favorites = useSelector((state) => state.myFavorites);

  const dispastch = useDispatch();

  const handleOrder = (e) =>{
    setAux(!aux)
    dispastch(orderCards(e.target.value));
  }
  const handleFilter = (e) =>{
      dispastch(filterCards(e.target.value));
    }
    
  return (
    <>
          <select onChange={handleOrder}>
            <option value="a">Ascendente</option>
            <option value="d">Descendente</option>
          </select>

          <select onChange={handleFilter}>
          <option value='All'>All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          </select>

          <div style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {favorites.map(
            ({ id, name, status, gender, species, origin, image, onClose}) => {
              return (
                <div key={id}>
                  <Card
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin }
                    image={image}
                    onClose={()=>onClose}
                  />
                </div>
              );
            }
          )}
        </div>
        </>
      );
 }; 
    
    
const mapStateToProps = (state) =>{
    return {
        favorites: state.myFavorites,
    };
};
 
export default connect(mapStateToProps,{filterCards, orderCards, removeFav})(Favorites);