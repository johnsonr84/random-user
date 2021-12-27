import React, { useContext } from 'react'
import MemberContext from '../contexts/context'
import moment from 'moment'

function Card() {
  const { memberData } = useContext(MemberContext)
  // console.log(memberData)

  return (
    <>
      <div className="card center" style={{padding: '1.5rem 0 1.5rem 0'}}>
        <div className="profile-img">
          <img
            src={memberData.image.large}
            alt="large profile member pic"
          ></img>
        </div>
        <div className="item">
          <h2>
            <span>{memberData.first + ' ' + memberData.last}</span>
          </h2>
        </div>

        <div className="center">
          <div className="item">
            <h3>Address:</h3>
            <span>
              {memberData.location.street.number}{' '}
              {memberData.location.street.name}
            </span>
            <br></br>
            <span>
              {memberData.location.city}, {memberData.location.state}{' '}
              {memberData.location.postcode}
            </span>
          </div>
          <div  className="item">
            <h3>Email:</h3>
            <span>{memberData.email}</span>
          </div>
          <div className="item">
            <h3>Date of Birth:</h3>
            {/* <span>{memberData.dob}</span> */}
            <span>{moment(`${memberData.dob}`).format('LL')}</span>
          </div>
          <div className="item">
            <h3>Phone:</h3>
            <span>{memberData.phone}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
