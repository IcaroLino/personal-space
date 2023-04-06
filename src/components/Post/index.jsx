import PostContent from 'components/PostContent';
import React from 'react';
import posts from 'json/posts.json';
import './Post.css';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Post() {

  const param = useParams();

  const post = posts.find((post) => post.id === Number(param.id));

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
    
    </PostContent>
  )
}
