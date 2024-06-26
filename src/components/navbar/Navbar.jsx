"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import NavLink from './navlink/NavLink'
import Link from 'next/link'
import Image from 'next/image'
import { handleLogout } from '@/lib/action'
import { auth } from '@/lib/auth'

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

const Navbar = async() => {

  const [open, setOpen] = useState(false);


  const session = await auth();
  const isAdmin = true;

  return (
    <>
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>

      <div className={styles.links}>
        {links.map((item, index)=>(
          <NavLink key={index} item={item}></NavLink>
        ))}
        {session.user ? (
          <>
          {session.user?.isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}></NavLink>}
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}}></NavLink>
        )}
      </div>

      <Image className={styles.menuBtn} onClick={()=>setOpen(!open)} src='/menu.png' alt='' height={30} width={30}/>

      {open && <div className={styles.mobileLinks}>
        {links.map((link)=>(
          <NavLink key={link.title} item={link}></NavLink>
        ))}

          {session ? (
          <>
          {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}></NavLink>}

          <form action={handleLogout}>
            <button  className={styles.logout}>Logout</button>
          </form>

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
