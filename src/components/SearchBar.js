import React from 'react'

function SearchBar({ memberSearchData }) {
  const handleOnChange = (e) => {
    memberSearchData(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="center" style={{  backgroundColor: '#fdc70b' }}>
      <input
        type="text"
        onChange={handleOnChange}
        name="search"
        list="term"
        className="form-control"
        placeholder="Search A Member's Name"
        id="term"
      />
    </div>
  )
}

export default SearchBar
