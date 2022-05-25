import React from 'react'
import './Reservation.css'

function Reservation({ date, id, name, number, time }) {
  return (
    <div className="single-reservation">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Guests: {number}</h3>
      <button className="cancel">Cancel Reservation</button>
    </div>
  )
}

export default Reservation
