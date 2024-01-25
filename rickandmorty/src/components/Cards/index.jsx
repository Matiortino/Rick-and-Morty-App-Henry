import Card from "../Card";

import styles from "./styles.module.css";

export const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.carta}>
      {characters.map(
        //   ({ id, name, status, gender, species, origin, image, onClick }) => (
        (character) => {
          return (
            <div key={character.id}>
              <Card
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin.name}
                image={character.image}
                onClose={onClose}
                // {...item}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;
