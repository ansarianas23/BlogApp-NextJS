import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/17454329/pexels-photo-17454329/free-photo-of-tress-on-hills-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="about-img" fill/>
    </div>
  )
}

export default AboutPage
