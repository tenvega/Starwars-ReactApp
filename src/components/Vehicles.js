import React, { Component } from 'react';



export default class Vehicles extends Component {
  constructor(props) {
      super(props);
    }
  render() {
    let vehicles = this.props.vehicles.map(function(vehicle) {
     return (
        <div className="col-sm-4" key={vehicle.name}>
          <div className="card" >
            <div className="card-block">
              <h3 className="card-title">Vehicle{vehicle.name}</h3>
              <h4 className="card-subtitle mb-2 text-muted">{vehicle.model}</h4>
              <ul className="list-group list-group-flush card-block">
              <li className="list-group item">Manufaturer:{vehicle.manufacturer}</li>
              <li className="list-group item">Class:{vehicle.vehicle_class}</li>
              <li className="list-group item">Passengers:{vehicle.passengers}</li>
              <li className="list-group item">Crew:{vehicle.crew}</li>
              <li className="list-group item">Length:{vehicle.length}</li>
              <li className="list-group item">Max speed:{vehicle.max_atmosphering_speed}</li>
              <li className="list-group item">Cargo Capacity:{vehicle.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    });
    return(
        <div className="vehicle_list">
          <div className="row">
          {vehicles}
          </div>
        </div>
    )
  }
}
