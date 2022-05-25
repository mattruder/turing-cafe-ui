import React, { Component } from 'react'
import './ReservationForm.css'

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
     this.setState({[event.target.name]: event.target.value});
   }

   handleSubmit(event) {
     this.setState({
       name: '',
       date: '',
       time: '',
       guests: ''
     })
     event.preventDefault();
   }

   makeReservation(name, date, time, guests) {
     const newDate = date.slice(5).replaceAll("-", "/")
     const reservation = {
       id: Date.now(), name: name, date: newDate, time: time, number: guests
     }
     fetch('http://localhost:3001/api/v1/reservations', {
       method: 'POST',
       body: JSON.stringify(reservation),
       headers: {
         'Content-Type' : 'application/json'
       }
     })
     .then(response => response.json())
     .then(this.props.updateDom)
   }

   render() {
   return (
     <form className="reservation-form" onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input name="name" className="name-input" type="text" value={this.state.name} onChange={this.handleChange} />
       </label>
       <label>
         Date:
         <input name="date" className="date-input" type="date" value={this.state.date} onChange={this.handleChange} />
       </label>
       <label>
        Time:
         <input name="time" className="time-input" type="time" value={this.state.time} onChange={this.handleChange} />
       </label>
       <label>
         Guests:
         <input name="guests" className="guests-input" type="number" value={this.state.guests} onChange={this.handleChange} />
       </label>
       <input type="submit" className="make-reservation-input" value="Make Reservation" onClick={() => {this.makeReservation(this.state.name, this.state.date, this.state.time, this.state.guests)}}/>
     </form>
   );
 }


}

export default ReservationForm
