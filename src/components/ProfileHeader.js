import React, { useContext } from 'react';
import MemberContext from '../contexts/context';

function ProfileHeader() {
  const {memberData}=useContext(MemberContext);
  return (
    <>
      <div className="header center">
        <h1>{memberData.first}'s Information</h1>
      </div>
    </>
  )
}

export default ProfileHeader
