import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Searchbar(props) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    props.search(e.target.value);
  };

  return (
      <>
        <Divider>Search</Divider>
        <h2>Search</h2>
        <label>Search</label>
        <Input type="text" value={search} onChange={handleChange} />
      </>
  );
}

export default Searchbar;
