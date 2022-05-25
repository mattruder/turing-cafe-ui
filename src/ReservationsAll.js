import { React, Component } from 'react'
import './ReservationsAll.css'
import Reservation from './Reservation.js'

function ReservationsAll({ allReservations }) {
  const reservations = allReservations.map((reservation) => {
    return (
      <Reservation
        date={reservation.date}
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
      />
    )
  })

  return (
    <div className="reservations">
      {reservations}
    </div>
  )
}

export default ReservationsAll
