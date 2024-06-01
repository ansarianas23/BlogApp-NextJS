import React from "react";
import styles from './postUser.module.css'
import Image from "next/image";

const getData = async(userId)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
    if(!res.ok){
        throw new Error("Something went wrong");
    }
    return res.json();
}

const PostUser = async ({userId}) => {

  const user = await getData(userId);

  return (
    <div className={styles.detail}>
      <div className={styles.avatarImgContainer}>
        <Image
          className={styles.avatar}
          src="https://images.pexels.com/photos/11136857/pexels-photo-11136857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
