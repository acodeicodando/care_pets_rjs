import React, { Component, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import API from '../../api';

export default class PetsTable extends Component {

  constructor() {
    super()
    this.state = {
      pets: []
    }
    // this.getPets = this.getPets.bind(this)
  }

  componentDidMount() {
    this.getPets()
  }

  async getPets() {
    const response = await API.get(`pets`);
    this.setState({
      pets: response.data
    })
  };


  render() {
    return (
      <div className="pet-list">
        <h3 className="border-bottom border-dark p-b p-4">Pets that adopted or waiting for you</h3>
        <Router>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Pet Name</th>
                <th>Date of Birth</th>
                <th>Type</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pets.count == 0 &&
                <tr className="emptyPets">
                  <td colSpan="4">
                    Waiting for pets
                  </td>
                </tr>
              }
              {this.state.pets.map(pet => (
                <tr key={pet.id}>
                  <td className="align-middle">
                    <h5 className="text-truncate">{pet.name}</h5>
                    <Link to="/pets/akira#adoptedInfo" className="text-info">Adopted by: Rodrigo Toledo</Link>
                  </td>
                  <td className="align-middle">{pet.date_of_birth}</td>
                  <td className="align-middle">{pet.pet_type}</td>
                  <td className="align-middle text-right">
                    <div className="btn-group" role="group" aria-label="Actions for this Pet">
                      <Link to="/pets/akira/edit" className="btn bg-secondary text-white">Edit</Link>
                      <Link to="/pets/akira" className="btn bg-secondary text-white">Details</Link>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="align-middle">
                  <h5 className="text-truncate">Funny Cat</h5>
                  <a href="#" className="text-secondary">Adopt me</a>
                </td>
                <td className="align-middle">2016-01-01</td>
                <td className="align-middle">Cat</td>
                <td className="align-middle text-right">
                  <div className="btn-group" role="group" aria-label="Actions for this Pet">
                    <Link to="/pets/funny-cat/edit" className="btn bg-secondary text-white">Edit</Link>
                    <Link to="/pets/funny-cat" className="btn bg-secondary text-white">Details</Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Router>
      </div>
    )
  }
}
