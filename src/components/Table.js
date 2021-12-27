import React, { useContext } from 'react';
import MemberContext from '../contexts/context';
import {useHistory} from 'react-router-dom';

function Table({ member }) {
console.log(member)
  const {setMemberData} = useContext(MemberContext)
  const history = useHistory()

  const showProfile = () => {
    setMemberData({
      image: member.image,
      first: member.name.first,
      last: member.name.last,
      age: member.dob.age,
      phone: member.phone,
      email: member.email,
      dob: member.dob,
      location: member.location,
    })
    history.push('/profile')
  }

  return (
      <tr onClick={showProfile}>
        <td><img alt={member.first} src={member.image.thumbnail} /></td>
        <td>{member.name.first} {member.name.last}</td>
        <td>{member.dob.age}</td>
        {/* <td>{member.phone}</td>
        <td>{member.email}</td> */}
      </tr>
  )
}

export default Table;
