import React from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='https://images.pexels.com/photos/11136857/pexels-photo-11136857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill/>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>

        <div className={styles.detail}>
          <div className={styles.avatarImgContainer}>
            <Image className={styles.avatar} src='https://images.pexels.com/photos/11136857/pexels-photo-11136857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={50} height={50}/>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Ansari Anas</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium enim facilis doloribus similique excepturi molestias atque fugit dolorem quisquam inventore dolores a corrupti fuga quod laborum alias quas minima voluptates id aperiam odio harum, neque eum? Consequuntur, culpa dolorum. Beatae porro laboriosam at veritatis voluptatem velit eaque reprehenderit sit.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
