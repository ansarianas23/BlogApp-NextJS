"use-client"
import React from 'react'
import styles from './adminPostForm.module.css'
import { addPost } from '@/lib/action'
import {useFormState} from 'react-dom'

const AdminPostForm = ({userId}) => {

  const [state, formAction] = useFormState(addPost, undefined)

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Title</h1>
      <input type="hidden" name='userId' value={userId}/>
      <input type="text" name='title' placeholder='Title'/>
      <input type="text" name='slug' placeholder='Slug'/>
      <input type="text" name='img' placeholder='Image'/>
      <textarea name="description" placeholder='Description' rows={10}></textarea>
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminPostForm
