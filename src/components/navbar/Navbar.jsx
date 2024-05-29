"use client"
import React from 'react'
import styles from "./navbar.module.css"
import Navlink from './navlink/Navlink'

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

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>

      <div className={styles.links}>
        {
          links.map((item, index)=>(
           <Navlink key={index} item={item}></Navlink>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar
