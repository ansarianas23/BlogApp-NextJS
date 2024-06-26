import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Contact Page",
  description: "Conact Description"
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/contact.png' alt='contact image' fill/>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Phone Number (Optional)'/>
          <textarea cols="30" rows="8" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
