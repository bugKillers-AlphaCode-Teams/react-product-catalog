import React from 'react';
import notFoundImage from '../images/icons/Not Found Page Cat.png'; 

export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <div className="container notFoundPage">
        <img src={notFoundImage} alt="Not Found"/>
        <h1>Unfortunately, we did not find such a page on our site.</h1>
      </div>
    </div>
  );
};
