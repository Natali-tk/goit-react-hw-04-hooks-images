import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery ({images,onSelect}) {
  return (
    <ul className={s.imageGalleryList} >
        {images.map(image=>(
        
        <ImageGalleryItem 
        key={image.id}
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        alt={image.tags}
        getLargeImageURL={onSelect}
        />
         
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default ImageGallery;
