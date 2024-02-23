import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import styles from "../Nav/nav.module.css"

const Nav = ({onSearch, logout}) => {

return (
    <div className={styles.nav}>

         <SearchBar onSearch={onSearch} />
         <Link to="/About" className={styles.home}>About</Link>
         <Link to="/Home" className={styles.home}>Home</Link>
         <Link to="/Favorites" className={styles.home}>Favorites</Link>
         <button className={styles.logout} onClick={logout}>Logout</button>


    </div>
)
}

export default Nav;

//