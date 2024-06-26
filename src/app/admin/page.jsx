import React, { Suspense } from 'react'
import styles from './adminPage.module.css'
import AdminPosts from '@/components/adminPosts/AdminPosts'
import AdminPostForm from '@/components/adminPostForm/AdminPostForm'
import AdminUsers from '@/components/adminUsers/AdminUsers'
import AdminUserForm from '@/components/adminUserForm/AdminUserForm'
import { auth } from '@/lib/auth'

const AdminPage = async() => {

  const session = await auth();

  return (
    <div className={StyleSheet.container}>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts></AdminPosts>
          </Suspense>
        </div>

        <div className={styles.col}>
            <AdminPostForm userId={session.user.id}></AdminPostForm>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers></AdminUsers>
          </Suspense>
        </div>

        <div className={styles.col}>
            <AdminUserForm></AdminUserForm>
        </div>
      </div>

    </div>
  )
}

export default AdminPage
