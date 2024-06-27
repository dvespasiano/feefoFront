import React from 'react';
import PropTypes from 'prop-types';

import './SalesMetrics.css';
import '../app.css';

const SalesMetrics = ({ uploadSuccess, linesSaved }) => (
  <div className="sales-metrics">
    <div className="metric">
      <h1>{uploadSuccess}%</h1>
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
