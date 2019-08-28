import React, { useState, useContext } from 'react';
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Images...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' />
      </form>
      {unsplashContext.images.length > 0 && (
        <button onClick={unsplashContext.clearImages}>Clear</button>
      )}
    </div>
  );
};

export default Search;
