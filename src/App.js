import React from 'react'
import Header from './components/Header'
import Table from './components/Table'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

      </table>
    </>
  )
}

export default App
