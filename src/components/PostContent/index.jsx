import React from 'react';
import styles from './PostContent.module.css';

export default function PostContent({ children, coverPicture, title }) {
  return (
    <article className={styles.PostContent}>
      <div 
        className={styles.coverPicture}
        style={{ backgroundImage: `url(${coverPicture})` }}
      >
      </div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.PostContentContainer}>
        {children}
      </div>
    </article>
  )
}
