import React, { Suspense } from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'

// Fetch with an API
// const getData = async(slug)=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if(!res.ok){
//       throw new Error("Something went wrong");
//   }
//   return res.json();
// }

export const generateMetadata = async({params})=>{
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description
  };
}

const SinglePostPage = async ({params}) => {
  const {slug} = params;

  // Fetch with an API
  // const post = await getData(slug);

  // Fetch without an API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} fill/>
      </div>}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>

        <div className={styles.detail}>
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}></PostUser>
          </Suspense>}
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        
        <div className={styles.content}>
          {post.description}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
