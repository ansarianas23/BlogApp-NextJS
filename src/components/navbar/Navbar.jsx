"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import NavLink from './navlink/NavLink'
import Link from 'next/link'

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

const Navbar = () => {

  const [open, setOpen] = useState(false);


  const session = true;
  const isAdmin = true;

  return (
    <>
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>

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

      <button className={styles.menuBtn} onClick={()=>setOpen(!open)}>Menu</button>
      {open && <div className={styles.mobileLinks}>
        {links.map((link)=>(
          <NavLink key={link.title} item={link}></NavLink>
        ))}

          {session ? (
          <>
          {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}></NavLink>}
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}}></NavLink>
        )}
      </div>}
    </div>

  </>
  )
}

export default Navbar
