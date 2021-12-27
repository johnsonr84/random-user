import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Table from './Table'
import SearchBar from './SearchBar'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MemberContainer() {
  const [members, setMembers] = useState([])
  const [memberData, memberSearchData] = useState('')
  const [dataValue, setDataValue] = useState('name.first')
  const [sortValue, setSortValue] = useState(-1)

  useEffect(() => {
    API.getMembers()
      .then((res) => res.data.results)
      .then((data) =>
        data.map(({ picture, name, age, phone, email, dob, location }) => ({
          image: picture,
          name,
          age,
          phone,
          email,
          dob,
          location,
        }))
      )
      .then(setMembers)  
  }, [])

  const memberDataRegExp = new RegExp(memberData, 'i')
  const getData = (member) => {
    switch (dataValue) {
      case 'name.first':
        return member.name.first
      case 'name.last':
        return member.name.last
      default:
        return member[dataValue]
    }
  }

  const updateData = (data) => {
    if (dataValue === data) {
      setSortValue(-sortValue)
    } else setDataValue(data)
  }

  return (
    <>
      <SearchBar memberSearchData={memberSearchData} />
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => updateData('name.first')}>
              Name <FontAwesomeIcon icon={faSort} />
            </th>
            <th>Age</th>
            {/* <th>Phone</th>
            <th onClick={() => updateData('email')}>
              Email <FontAwesomeIcon icon={faSort} />
            </th> */}
          </tr>
        </thead>

        <tbody className="table-row">
          {members
            .filter(
              (member) =>
                memberDataRegExp.test(member.name.first) ||
                memberDataRegExp.test(member.name.last) ||
                memberDataRegExp.test(member.email),
            )
            .sort((memberA, memberB) => {
              const a = getData(memberA)
              const b = getData(memberB)
              if (a < b) {
                return sortValue
              }
              if (a > b) {
                return -sortValue
              }
              return 0
            })
            .map((member) => (
              <Table
                member={member}
              />
            ))}
        </tbody>
      </table>
    </>
  )
}

export default MemberContainer;
