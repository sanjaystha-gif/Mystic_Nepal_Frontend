import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClickableImage = ({ 
  src, 
  alt, 
  className = '', 
  type = 'place',
  id,
  additionalInfo = {}
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (type === 'place') {
      navigate(`/place/${id}`);
    } else if (type === 'event') {
      navigate(`/event/${id}`);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-pointer ${className}`}
      onClick={handleClick}
      data-info={JSON.stringify(additionalInfo)}
    />
  );
};

export default ClickableImage;
