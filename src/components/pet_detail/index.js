import React from 'react'

const PetDetail = () => {
  return (
    <div className="pet-detail">
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
  )
}

export default PetDetail;