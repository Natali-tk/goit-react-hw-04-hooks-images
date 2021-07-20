import React from "react";
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
     Load more
    </button>
  );
};

export default Button;


Button.propTypes = {
  onClick: PropTypes.func.isRequired
}