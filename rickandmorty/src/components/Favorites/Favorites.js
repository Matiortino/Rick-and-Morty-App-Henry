import React from "react";
import { connect } from "react-redux";
import Card from "../Card";

const Favorites = ({ favorites }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
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
      )
    }
    
const mapStateToProps = (state) =>{
    return {
        favorites: state.myFavorites
    }
};

export default connect(mapStateToProps,{})(Favorites);