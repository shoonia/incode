import React from 'react';

const Card = ({ general, job, onClick }) => (
  <div className="card mb-2" onClick={onClick}>
    <div className="card-body">
      <div className="media">
        <img className="mr-3" src={general.avatar} alt="avatar" width="50" height="50" />
        <div className="media-body">
          <p className="m-0 font-weight-bold">{general.firstName} {general.lastName}</p>
          <p>{job.company}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
