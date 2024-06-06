"use client"

import React, { useEffect } from 'react'
import styles from "./"
import { useFormState } from 'react-dom'
import { login } from '@/lib/action'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined)

    const router = useRouter();

    useEffect(()=>{
        state.success && router.push('/login');
    },[state?.success, router]);

  return (
    <div className={styles.container}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder='Username' name='username' />
          <input type="password" placeholder='Passwod' name='password' />
          <button>Login</button>
          {state?.error}
          <Link href="/register">Don't have an account? <b>Register</b></Link>
        </form>
    </div>
  )
}

export default LoginForm
