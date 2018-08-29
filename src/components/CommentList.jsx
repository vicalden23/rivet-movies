import React from 'react';

const CommentList = ({comments}) => {
  return (
    <div>
      <p>
        Comments ({comments.length}):
      </p>
      <div className='comments-card'>
        {
          comments ? comments.map((comment, i) => {
            return (
              <p key={i}>
                "{comment}"
              </p>
            );
          })

          : ''
        }
      </div>
    </div>
  );
}

export default CommentList;
