import React, { useState } from "react";
import { validation } from "../Form/validations.js";
import styles from "../Form/index.module.css";
import imagenDos from "../Form/rick&morty.jpg"

const Form = ({loginUser}) => {

  const [userData, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleOnchange = (event) => {
    setData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors (validation({ ...userData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser(userData);
  };

  return (
    <div className={styles.contenedor}>
      <img src={imagenDos} className={styles.imagenDos} alt="" />
        <form 
        onSubmit={handleSubmit} className={styles.submit}>
        <h1 className={styles.title}>Email:</h1>
        <input
          className={styles.input1}
          type='text'
          name='email'
          placeholder='Email'
          value={userData.email}
          onChange={handleOnchange}
        />

        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <h1 className={styles.title}>Password:</h1>
        <input
          className={styles.input1}
          type='password'
          name='password'
          placeholder='password'
          value={userData.password}
          onChange={handleOnchange}
        />

        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button type='submit' className={styles.boton}>Submit</button>
      </form>
    </div>
  );
};

export default Form;