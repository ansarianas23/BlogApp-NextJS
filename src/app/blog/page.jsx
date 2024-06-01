import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'

const getData = async(slug)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if(!res.ok){
      throw new Error("Something went wrong");
  }
  return res.json();
}

const AdminPage = async() => {

  const posts = await getData();
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
