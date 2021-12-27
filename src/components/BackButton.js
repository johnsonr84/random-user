import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <>
      <div className="center" style={{backgroundColor: '#fdc70b', padding: '0.5rem'}}>
        <Link to='/' className="back-button">
          <button>Back to Member Directory</button>
        </Link>
      </div>
    </>
  )
}

export default BackButton
