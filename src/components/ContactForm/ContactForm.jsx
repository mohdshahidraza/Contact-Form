import React from 'react'
import Button from '../Button/Button'
import styles from '../ContactForm/ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";




const ContactForm = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Name " , event.target[0].value);
    console.log("Mail " , event.target[1].value);
    console.log("Text " , event.target[2].value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>

        <div className={styles.top_btn}>

          <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="18px" />}/>
          
          <Button text="VIA CALL" icons={<IoCall fontSize="18px"/>}/>
        
        </div>
        
        <Button 
          isOutline={true}
          text="VIA EMAIL FORM" 
          icons={< HiMail fontSize="18px" />}
        />

        <form  onSubmit={onSubmit}>

          <div className={styles.form_control}>
            
              <label htmlFor="name">Name</label>
              <input type=" text" name='name' />

          </div>

          <div className={styles.form_control}>
            
            <label htmlFor="email">Email</label>
            <input type=" text" name='email' />

        </div>

        <div className={styles.form_control}>
            
            <label htmlFor="text">Text</label>
            <textarea  name='text' />

        </div>

        <Button 
          text="SUBMIT BUTTON" 
        />

        </form>

      </div>


      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt=" contact image" height="490px"/>

      </div>

    </section>
  )
}

export default ContactForm