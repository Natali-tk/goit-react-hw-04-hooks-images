import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Api from './services/image-api';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchImages();
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchImages = () => {
    setLoading(true);
    Api.fetchImages({ query, page })
      .then(
        images => setImages(prevState => [...prevState, ...images]),
        setPage(prevState => prevState + 1),
      )
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };
  const handleSelectImage = imageUrl => {
    setSelectedImage(imageUrl);
    toggleModal();
  };

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError(null);
  };

  
   
  return (
    <>
      {error && toast.error('OOO, something is wrong!')}
      <Searchbar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images} onSelect={handleSelectImage} />
      {images.length > 0 && <Button fetchImages={fetchImages} />}
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={selectedImage} />
      )}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}
export default App;

