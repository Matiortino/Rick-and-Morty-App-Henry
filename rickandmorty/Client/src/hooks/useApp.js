import { useState } from "react";

export const URL = "http://localhost:3001/rickandmorty/character/";

const useApp = () => {

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try {
      const response = await fetch(`${URL}${id}`);
      const data = await response.json();
      setCharacters([...characters, data]);
    } catch (error) {
      console.log('error', error);
    }
  }

  const onClose = (id) => {
    const personajesFiltrados = characters.filter((character) => character.id !== id);
    setCharacters(personajesFiltrados);
  }

  return {
    characters,
    onSearch,
    onClose,
  }
}

export default useApp;