import React from 'react';

const Profile = ({general, job, contact, address}) => (
  <div className="media sticky-top pt-3">
    <img className="ml-3" src={general.avatar} width="128" height="128" />
    <div className="media-body ml-5">
      <h3>
        {general.firstName} {general.lastName}
      </h3>
      <p>{job.title} - {job.company}</p>
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
  </div>
);

export default Profile;
