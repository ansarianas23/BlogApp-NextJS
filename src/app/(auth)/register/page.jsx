import React from 'react'
import styles from './register.module.css'
import RegisterForm from '@/components/registerForm/RegisterForm'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  )
}

export default RegisterPage
