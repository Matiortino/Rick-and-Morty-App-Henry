import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites/Favorites";
// import { validation } from "../Form/validations.js";

const URL = "https://rickandmortyapi.com/api/character/";

const access = {
  isLoged: false,
}
const emailValid = (email) => {
  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regexEmail.test(email);
};
const passwordValid = (password) => {
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/;
  return regexPassword.test(password);
};


function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {

    try {
      const response = await fetch(`${URL}${id}`);
      const data = await response.json();
      setCharacters([...characters, data]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onClose = (id) => {
    const personajesFiltrados = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(personajesFiltrados);
  };

  const login = (data) => {
    if (emailValid(data.email) && passwordValid(data.password)) {
      access.isLoged = true;
      navigate('/home');
    } else {
      window.alert('Correo electrónico o contraseña incorrectos');
    }
  };

  const logout = () => {
    alert('adios');
    access.isLoged = false;
    navigate('/');
  }

  useEffect(() => {
    !access.isLoged && navigate('/');
  }, [navigate, access.isLoged]);

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form loginUser={login} />} />
        <Route
          path='/Home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/About' element={<About />} />
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path='/Favorites' element={<Favorites />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
