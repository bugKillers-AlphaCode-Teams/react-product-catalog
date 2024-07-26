import React from 'react';
import notFoundImage from '../images/icons/Not Found Page Cat.png'; 

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <img 
        src={notFoundImage} 
        alt="Not Found"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
        }}
      />
    </div>
  );
};
