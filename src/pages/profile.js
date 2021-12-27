import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import BackButton from '../components/BackButton'
import Card from '../components/Card'

const ProfilePage = () => {
  return (
    <>
      <div className="profile">
        <ProfileHeader />
        <BackButton />
        <Card />
      </div>
    </>
  )
}

export default ProfilePage
