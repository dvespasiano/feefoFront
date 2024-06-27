import React from 'react';
import PropTypes from 'prop-types';

const SalesMetrics = ({ uploadSuccess, linesSaved }) => (
  <div className="sales-metrics">
    <div className="metric">
      <p>{uploadSuccess}%</p>
      <p>UPLOAD SUCCESS</p>
    </div>
    <div className="metric">
      <p>{linesSaved}%</p>
      <p>LINES SAVED</p>
    </div>
  </div>
);

SalesMetrics.propTypes = {
  uploadSuccess: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired
};

export default SalesMetrics;
