import React from 'react'
import './style.css';

function SearchBar({ memberSearchData }) {
  const handleOnChange = (e) => {
    memberSearchData(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleOnChange}
        name="search"
        list="term"
        className="form-control"
        placeholder="Search Member Name or Email"
        id="term"
      />
    </div>
  )
}

export default SearchBar
