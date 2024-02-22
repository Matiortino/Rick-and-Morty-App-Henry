import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL } from "../../hooks/useApp";
import styles from "../Card/index.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const getCharacter = await axios(`${URL}${id}`);
        console.log("getCharacter", getCharacter);

        if (getCharacter.data.name) {
          setCharacter(getCharacter.data);
          console.log("getCharacter.data", getCharacter.data.origin);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.log("error", error);
      }
    })();

    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && <h1 className={styles.titulo}>{character.name}</h1>}
      <img src={character.image} className={styles.imgId} alt={character.name} />
      <h3 className={styles.subtitle}>{character.status} </h3>
      <h2 className={styles.subtitle}>{character.species}</h2>
      <h2 className={styles.subtitle}>{character.gender}</h2>
      {character.origin && <h2 className={styles.subtitle}>{character.origin.name}</h2>}
    </div>
  );
};

export default Detail;
