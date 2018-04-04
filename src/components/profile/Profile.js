import React from 'react';

const Profile = ({general, job, contact, address}) => (
  <div className="media sticky-top pt-3">
    <div className="media-body">
      <h3>
        {general.firstName} {general.lastName}
      </h3>
      <p>{job.title}</p>
      <p className="text-muted">{job.company}</p>
      <h5>Contact</h5>
      <ul>
        <li>{contact.email}</li>
        <li>{contact.phone}</li>
      </ul>
      <h5>Address</h5>
      <ul>
        <li>{address.street}</li>
        <li>{address.city}</li>
        <li>{address.zipCode}</li>
        <li>{address.country}</li>
      </ul>
    </div>
    <img className="ml-3" src={general.avatar} width="128" height="128" />
  </div>
);

export default Profile;
