import React, { useState, useEffect } from 'react'
import API from "./utils/API";
import Header from './components/Header'
import Table from './components/Table'
import SearchBar from "./components/SearchBar";

function App() {
  const [members, setMembers] = useState([]);
  const [memberData, memberSearchData] = useState("");
  const [dataValue] = useState('name.first');
  const [sortValue] = useState(-1);

  useEffect(() => {
    API.getMembers()
      .then((res) => res.data.results)
      .then((data) => data.map(({ name, phone, email, picture }) => ({
        image: picture.thumbnail,
        name,
        phone,
        email
      })))
      .then(setMembers);
  }, []);

  const memberDataRegExp = new RegExp(memberData, "i")
  const getData = (member) => {
    switch (dataValue) {
      case "name.first":
        return member.name.first
      case "name.last":
        return member.name.last
      default:
        return member[dataValue]
    }
  }


  return (
    <>
      <Header />
      <SearchBar memberSearchData={memberSearchData} />

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody className="table-row">
                {members
                  .filter((member) =>
                    memberDataRegExp.test(member.name.first) ||
                    memberDataRegExp.test(member.name.last) ||
                    memberDataRegExp.test(member.email)
                  ).sort((memberA, memberB) => {
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
                  .map(member => (
                    < Table
                      name={member.name.first + " " + member.name.last}
                      image={member.image}
                      phone={member.phone}
                      email={member.email}
                    />
                  ))}
              </tbody>

      </table>
    </>
  )
}

export default App
