import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/action';
import styles from "../Card/index.module.css"


const Card =  (props) => {

   const { name, status, gender, species, origin, image, addFav, onClose, removeFav, favorites} = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(props.id)
      }else{
         setIsFav(true);
         addFav({
         id: props.id,
         name,
         status,
         gender,
         species,
         origin,
         image,
      });
      }
   };

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [favorites]);


   return (
      <div>
         <img className ={styles.img} src={props.image} alt='foto' />
         
         {isFav ? (<button className={styles.corazon} onClick={handleFavorite}>❤️</button>) : (
         <button className={styles.corazon} onClick={handleFavorite}>🤍</button>)
         }
         
         <Link to={`/detail/${props.id}`}>
         <h1 className={styles.titulo}>{props.name}</h1>
         </Link>
         <h2 className={styles.subtitle}>{props.status}</h2>
         <h2 className={styles.subtitle}>{props.species}</h2>
         <h2 className={styles.subtitle}>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <button className={styles.boton} 
         onClick={()=>onClose(props.id)}>X</button>
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      favorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, {addFav, removeFav, removeFav})(Card);

