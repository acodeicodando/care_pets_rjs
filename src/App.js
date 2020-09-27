import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Components or serverless functions
import PetsTable from './components/pets_table'
import PetDetail from './components/pet_detail'

const App = () => {
  const [date_of_birth, setDateOfBirth] = useState(null);

  return (
    <>
      <header className="w-100 bg-white">
        <h1 className="text-center p-5">
          <Router>
            <Link to="/">
              <FontAwesomeIcon icon={faDog} />
              Care Pets
            </Link>
          </Router>
        </h1>
      </header>
      <div className="m-4 row">
        <div id="details" className="col-6">
          <PetsTable />
          <PetDetail />
        </div>
        <div id="form" className="col-6">
          <h3 className="border-bottom border-dark p-b p-4">Fill the fields to create or edit Pet info</h3>
          <form action="">
            <div className="field-group">
              <label htmlFor="name">Pet Name</label>
              <input type="text" name="name" id="name" className="form-control" />
              <small className="form-text text-muted">Required field.</small>
            </div>
            <div className="field-group">
              <label>Date of Birth</label><br />
              <DatePicker
                selected={date_of_birth}
                onChange={date => setDateOfBirth(date)}
                dateFormat="d MMMM yyyy"
                className="form-control"
              />
              <small className="form-text text-muted">Required field.</small>
            </div>
            <div className="field-group">
              <label htmlFor="type_type">Pet Type</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlinePetType" id="inlineRadioDog" value="dog" />
                <label className="form-check-label" htmlFor="inlineRadioDog">Dog</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlinePetType" id="inlineRadioCat" value="cat" />
                <label className="form-check-label" htmlFor="inlineRadioCat">Cat</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlinePetType" id="inlineRadioOther" value="other" />
                <label className="form-check-label" htmlFor="inlineRadioOther">Other</label>
              </div>
              <small className="form-text text-muted">Required field.</small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
