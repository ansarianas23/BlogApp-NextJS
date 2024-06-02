import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from '@/lib/data';

// Fetch with an API
// const getData = async(slug)=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   if(!res.ok){
//       throw new Error("Something went wrong");
//   }
//   return res.json();
// }

const AdminPage = async() => {
  // Fetch with an API
  // const posts = await getData();

  // Fetch without an API
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post}>
          <PostCard key={post.id} post={post}/>
        </div>
      ))}
    </div>
  )
}

export default AdminPage
