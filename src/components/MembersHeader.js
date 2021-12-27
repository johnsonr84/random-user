import React from 'react'

function Header() {
  return (
    <>
      <div className="header center">
        <h1>Member Directory</h1>
        <p>Use the column sorting arrows to filter members alphabetically</p>
        <p>
          Or use the search box below to search by name (Enter first, last or
          fullname)
        </p>
        <p>
          Click anywhere on a members row to view their full profile information
        </p>
      </div>
    </>
  )
}

export default Header
