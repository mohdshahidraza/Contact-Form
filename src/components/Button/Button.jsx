import React from 'react'
import styles from './Button.module.css'



const Button = (props) => {
  
  return (
      
    <button className={props.isOutline ? styles.outline_btn : styles.button}>

    
      {props.icons}
      {props.text}

    </button>

    
  )
}

export default Button