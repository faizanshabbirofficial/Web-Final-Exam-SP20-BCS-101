import React, { useState } from 'react';
import './PostCard.css';

function PostCard({ title, body, tags, reactions, userId }) {
  return (
    <div className='card-container'>
      <div className='post-card'>
        <div className='title'>
          <h3 className='title-h3'>
            ID: {userId}
            <br />
            {title}
          </h3>
        </div>
        <p className='desc'>{body}</p>
        <div className='tags-desc'>
          <p>Tags: </p>
          <div className='tags'>
            {tags.map((tag) => (
              <p>#{tag}</p>
            ))}
          </div>
        </div>
        <p className='reactions'>
          <span>Reactions: </span>
          {reactions}
        </p>
      </div>
    </div>
  );
}

export default PostCard;
