import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


import './SalesInfo.css';

const SalesInfo = ({ uploads, linesAdded }) => (
  <div className="sales-info">
    <div className="sales-info-title">
      <div className="sales-info-title-sales">
        <FontAwesomeIcon icon={faUpload} />
        <h3>Sales</h3>
      </div>
      <div className="sales-info-info">
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
    </div>
    <p>You had <strong> {uploads} uploads</strong> and <strong> {linesAdded}</strong> lines added.</p>
  </div>
);

SalesInfo.propTypes = {
  uploads: PropTypes.number.isRequired,
  linesAdded: PropTypes.number.isRequired
};

export default SalesInfo;
