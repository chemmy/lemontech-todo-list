import React, { useState } from 'react';

const Searchbar = props => {
  const [text, setText] = useState('');

  return (
    <div className="search-bar">
      <div className="ui icon input">
        <input 
          type="text" 
          placeholder="Title"
          name='search'
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
        <i class="search icon"></i>
      </div>
    </div>
  )
}

export default Searchbar
