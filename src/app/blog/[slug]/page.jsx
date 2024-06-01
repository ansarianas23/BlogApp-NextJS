import React, { Suspense } from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'

const getData = async(slug)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if(!res.ok){
      throw new Error("Something went wrong");
  }
  return res.json();
}

const SinglePostPage = async ({params}) => {
  const {slug} = params;

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='https://images.pexels.com/photos/11136857/pexels-photo-11136857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill/>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>

        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}></PostUser>
          </Suspense>
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
