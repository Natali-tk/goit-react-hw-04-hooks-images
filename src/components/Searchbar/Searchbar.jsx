import React, { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";
import s from './Searchbar.module.css'

function Searchbar({onSubmit}) {
  const [query,setQuery]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(query.trim()===""){
      toast.info("Введите название картинки");
      return;
    }
   onSubmit(query);
   setQuery('');
  }

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.searchBtn}>
            <span className={s.searchLable}>Search</span>
          </button>

          <input
            className={s.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
