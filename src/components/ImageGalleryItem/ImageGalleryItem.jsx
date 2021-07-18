import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem ({ webformatURL,largeImageURL,alt="",getLargeImageURL}) {
  
  return (
    <li className={s.galleryItem} >
      <img
        src={webformatURL}
        alt={alt}
        className={s.galleryItemImage} 
        onClick={()=>getLargeImageURL(largeImageURL)} 
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string,
    getLargeImageURL: PropTypes.func.isRequired,
  }),
};

export default ImageGalleryItem;
