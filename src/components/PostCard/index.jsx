import Button from 'components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        <img 
          className={styles.cover}
          src={`/assets/posts/${post.id}/cover.png`}
          alt='Imagem de capa'
        />

        <h2 className={styles.title}>{post.title}</h2>

        <Button>Ler</Button>
      </div>
    </Link>
  )
}
