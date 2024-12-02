import React, { useState } from 'react';


const StarRating = ({ rating, onChange }) => {
  const handleClick = (value) => {
    if (onChange) onChange(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h1>Star Rating</h1>
      <StarRating rating={rating} onChange={setRating} />
      <p>Selected rating: {rating}</p>
    </div>
  );
};

export default App;
