import React from "react";
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ fetchImages}) => {
  return (
    <button className={s.button} type="button" onClick={fetchImages}>
     Load more
    </button>
  );
};

export default Button;


Button.propTypes = {
    fetchImages: PropTypes.func.isRequired
}