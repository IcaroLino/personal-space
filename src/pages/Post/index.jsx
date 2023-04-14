import PostContent from 'components/PostContent';
import React from 'react';
import posts from 'json/posts.json';
import './Post.css';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from './Post.module.css';
import PostCard from 'components/PostCard';

export default function Post() {

  const param = useParams();

  const post = posts.find((post) => post.id === Number(param.id));

  if (!post) return <h1>Post não encontrado!</h1>

  const recommendedPost = posts
      .filter((post) => {
        if (param.id > 4) return post.id < Number(param.id)
        return post.id !== Number(param.id)
      })
      .sort((a,b) => b.id - a.id)
      .slice(0, 4);

  return (
    <PostContent
      coverPicture={`/assets/posts/${post.id}/cover.png`}
      title={post.title}
    >

      <div className='post-markdown-container'>
        <ReactMarkdown>
          {post.text}
        </ReactMarkdown>
      </div>

      <h2 className={styles.othersPostsTitle}>
        Outros posts que você pode gostar:
      </h2>

      <ul className={styles.recommendedPosts}>
        {recommendedPost.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    
    </PostContent>
  )
}
