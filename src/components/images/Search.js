import React, { useState, useContext, Fragment } from 'react';
import UnsplashContext from '../../context/unsplash/unsplashContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const unsplashContext = useContext(UnsplashContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      unsplashContext.searchImages(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <Fragment>
      <form onSubmit={onSubmit} className='search'>
        <input
          type='text'
          name='text'
          placeholder='Search Images...'
          value={text}
          onChange={onChange}
          className='search__input'
        />
        <input className='btn search__button' type='submit' value='Search' />
      </form>
      {unsplashContext.images.length > 0 && (
        <button
          className='btn search__clear-button'
          onClick={unsplashContext.clearImages}
        >
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
