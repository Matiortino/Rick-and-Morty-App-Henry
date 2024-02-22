import { useState } from "react";
import styles from "../SearchBar/index.module.css";


const  SearchBar = (props) => {

   const [id, setId] = useState('')

   const handleClick = () => {
      // console.log('props', props);
      props.onSearch(id);
   }

   const hamdleChange = ({target}) => {
      setId(target.value)
   }

   return (
      <div className= {styles.barra1}>
         <h1 className={styles.titular}>¡Busca tu personaje!</h1>
         <input
            onChange={hamdleChange}
            value={id}
            type='search' 
            placeholder="id..."
         />
         <button onClick={() => handleClick()}>Agregar</button>
      </div>
   );
}

export default SearchBar;
