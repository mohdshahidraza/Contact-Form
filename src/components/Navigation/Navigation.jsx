import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav
        className={`${styles.navigation} container`}
    >
    
        <div >
            <a href="#"><img src="/images/logo.png" alt="Logo" /></a>
        </div>

        <ul >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation