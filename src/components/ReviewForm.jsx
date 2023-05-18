import React, { useState } from 'react';

function ReviewForm({ addReview }) {
  const [reviewText, setReviewText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setReviewText(value);
    setCharacterCount(value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(reviewText);
    setReviewText('');
    setCharacterCount(0);
  };

  return (
    <div className='form_review'>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={handleChange}
          placeholder="Enter your review..."
        ></textarea>
        <p>Số từ đã viết: {characterCount}</p>
        <button type="submit" className='addReview'>Add Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
