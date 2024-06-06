"use client"

import React, { useEffect } from 'react'
import styles from "./registerForm.module.css"
import { useFormState } from 'react-dom'
import { register } from '@/lib/action'
import { useRouter } from 'next/router'
import Link from 'next/link'

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter();

    useEffect(()=>{
        state.success && router.push('/login');
    },[state?.success, router]);

  return (
    <div className={styles.container}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder='Username' name='username' />
          <input type="email" placeholder='Email' name='email' />
          <input type="password" placeholder='Passwod' name='password' />
          <input type="password" placeholder='Confirm Passwod' name='confirmPassword' />
          <button>Register</button>
          {state?.error}
          <Link href="/login">Have an account? <b>Login</b></Link>
        </form>
    </div>
  )
}

export default RegisterForm
