import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <i
            key={index}
            className={`review_star ${
              index <= (hover || rating) ? "ph-star-fill" : "ph-star"
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          ></i>
        );
      })}
    </div>
  );
};

export default StarRating;
