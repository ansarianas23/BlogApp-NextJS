import React from "react";
import styles from './postUser.module.css'
import Image from "next/image";
import { getUser } from "@/lib/data";

// Fetch with an API
// const getData = async(userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }
//     return res.json();
// }

const PostUser = async ({userId}) => {

  // Fetch with an API
  // const user = await getData(userId);

  // Fetch without an API
  const user = await getUser(userId);

  return (
    <div className={styles.detail}>
      <div className={styles.avatarImgContainer}>
        <Image
          className={styles.avatar}
          src={user.img ? user.img : "/noavatar.png"}
          width={50}
          height={50}
        />
      </div>

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
