import React from 'react';

const LoadingCard = () => {
  return (
    <div className="cardProjects fakeCard">
      <div className="cardImage">
        <div className="fakeImage"><div className="fakeLoadingAnimation"></div></div>
      </div>
      <div className="cardContext">
        <div className="fakeTitle"></div>
        <div className="fakeBody"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
