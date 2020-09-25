import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

import Main from './components/main';

function App() {
  return (
    <>
      <header className="w-100 bg-white">
        <h1 className="text-center p-5">
          <FontAwesomeIcon icon={faDog} />
          Care Pets
        </h1>
      </header>
      <div className="m-4 row">
        <div id="details" className="col-6">
          <div className="pet-list">
            <h3 className="border-bottom border-dark p-b p-4">Pets that are adopted or waiting for you</h3>
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
                <tr className="emptyPets">
                  <td colspan="4">
                    Waiting for pets
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <h5 className="text-truncate">Akira</h5>
                    <a href="#" className="text-info">Adopted by: Rodrigo Toledo</a>
                  </td>
                  <td className="align-middle">2016-01-01</td>
                  <td className="align-middle">Dog</td>
                  <td className="align-middle text-right">
                    <div className="btn-group" role="group" aria-label="Actions for this Pet">
                      <a href="#" className="btn bg-secondary text-white">Details</a>
                      <a href="#" className="btn bg-secondary text-white">Edit</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <h5 className="text-truncate">Suzi</h5>
                    <a href="#" className="text-info">Adopted by: Gislene Dornelas</a>
                  </td>
                  <td className="align-middle">2016-01-01</td>
                  <td className="align-middle">Dog</td>
                  <td className="align-middle text-right">
                    <div className="btn-group" role="group" aria-label="Actions for this Pet">
                      <a href="#" className="btn bg-secondary text-white">Details</a>
                      <a href="#" className="btn bg-secondary text-white">Edit</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <h5 className="text-truncate">Funny Cat</h5>
                    <a href="#" className="text-secondary">Adopt me</a>
                  </td>
                  <td className="align-middle">2016-01-01</td>
                  <td className="align-middle">Cat</td>
                  <td className="align-middle text-right">
                    <div className="btn-group" role="group" aria-label="Actions for this Pet">
                      <a href="#" className="btn bg-secondary text-white">Details</a>
                      <a href="#" className="btn bg-secondary text-white">Edit</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pet-details">
            <h3 className="border-bottom border-dark p-b p-4">I'm <span className="text-info">Funny Cat</span></h3>
            <div className="pet-info">
              <span className="h6 row">
                <strong className="col-3">Pet Name</strong> <span className="text-truncate">Funny Cat</span>
              </span>
            </div>
            <div className="pet-info">
              <span className="h6 row">
                <strong className="col-3">Date of Birth</strong> 2016-01-01
              </span>
            </div>
            <div className="pet-info">
              <span className="h6 row">
                <strong className="col-3">Pet Type</strong> Cat
              </span>
            </div>
            <div className="pet-info">
              <div className="btn-group" role="group" aria-label="Actions for this Pet">
                <a href="#" className="btn bg-secondary text-white">Edit</a>
                <a href="#" className="btn bg-secondary text-white">Adopt me</a>
              </div>
            </div>
          </div>
        </div>
        <div id="form" className="col-6">
          <h3 className="border-bottom border-dark p-b p-4">Fill the fields to create or edit Pet info</h3>
          <form action="">
            <div className="field-group">
              <label htmlFor="name">Pet Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="field-group">
              <label>Date of Birth</label>
              <select name="birth_year">
                <option>Year</option>
                <option value="2020">2020</option>
              </select>
              <select name="birth_month">
                <option>Month</option>
                <option value="09">September</option>
              </select>
              <select name="birth_day">
                <option>Day</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="field-group">
              <label htmlFor="type_type">Pet name</label>
              <select name="pet_type">
                <option>Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
