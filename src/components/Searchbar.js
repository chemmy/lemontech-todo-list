import React, { useState } from 'react';

const Searchbar = props => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(text);
  };

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <div className="ui icon input">
        <input 
          type="text" 
          placeholder="Title"
          name='search'
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
        <i className="search icon" onClick={onSubmit}></i>
      </div>
    </form>
  )
}

export default Searchbar;
