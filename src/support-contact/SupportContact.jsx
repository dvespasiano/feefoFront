import React from 'react';
import PropTypes from 'prop-types';

import './SupportContact.css';
import '../app.css';

const SupportContact = ({ name, email, phone }) => (
  <div className="support-contact">
    <h3>Your Feefo Support Contact</h3>
    <div className="contact-details">
      <span aria-label="Support Initial" className="contact-initial">S</span>
      <div className="contact-info">
        <div  className="contact-info-name">
        <p>{name}</p>
        </div>
        <div className="contact-info-details">
        <p><a href={`mailto:${email}`}>{email}</a></p>
        <p>{phone}</p>
        </div>
      </div>
    </div>
  </div>
);

SupportContact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default SupportContact;
