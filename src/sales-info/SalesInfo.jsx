import React from 'react';
import PropTypes from 'prop-types';

const SalesInfo = ({ uploads, linesAdded }) => (
  <div className="sales-info">
    <h3>Sales</h3>
    <p>You had {uploads} uploads and {linesAdded} lines added.</p>
  </div>
);

SalesInfo.propTypes = {
  uploads: PropTypes.number.isRequired,
  linesAdded: PropTypes.number.isRequired
};

export default SalesInfo;
