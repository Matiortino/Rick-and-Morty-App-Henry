import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import styles from "../Nav/nav.module.css"

const Nav = ({onSearch}) => {

return (
    <div className={styles.nav}>
         <SearchBar onSearch={onSearch} />
         <Link to="/About" className={styles.about}>About</Link>
         <Link to="/Home" className={styles.home}>Home</Link>
         <Link to="/Favorites" className={styles.favorites}>Favorites</Link>
         {/* {access.isLoged && 
         (<button onClick={logout} className={styles.logoutButton}>Logout</button>
         )} */}
    </div>
)
}

export default Nav;