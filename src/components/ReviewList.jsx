import React from 'react';

function ReviewList({ reviews, deleteReview }) {
  return (
    <div className='div_content'>
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <p className='date_review'>{review.text}</p>
          <p>{review.date}</p>
          <i className="fas fa-trash" onClick={() => deleteReview(index)}>X</i>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
