import React, { Component } from 'react';
import './App.css';
import ReservationsAll from '../ReservationsAll.js'
import Reservation from '../Reservation.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      allReservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ allReservations: data }))
  }




  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.allReservations && <ReservationsAll allReservations={this.state.allReservations} />}
        </div>
      </div>
    )
  }
}

export default App;
