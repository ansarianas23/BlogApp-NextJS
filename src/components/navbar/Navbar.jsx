"use client"
import React from 'react'
import styles from "./navbar.module.css"
import NavLink from './navlink/NavLink'

const Navbar = () => {

  const links = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    },
  ]

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>

      <div className={styles.links}>
        {links.map((item, index)=>(
           <NavLink key={index} item={item}></NavLink>
        ))}
        {session ? (
          <>
          {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}></NavLink>}
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}}></NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
