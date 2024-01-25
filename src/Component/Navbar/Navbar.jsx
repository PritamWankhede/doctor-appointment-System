import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>

        <div className={styles.icontitle}>
            <img src = {require('../../Assets/healthicon.png')} alt='Health Icon'/>
             <h3>Health Care</h3>
        </div>
       
        <div className={styles.services}>
            <h2>Home</h2>
            <h2>Services</h2>
            <h2>Blogs</h2>
            <h2>About Us</h2>
            <h2> </h2>
            
        </div>
 </nav>
  )
}

export default Navbar;