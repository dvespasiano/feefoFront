import React from 'react';
import SalesInfo from '../sales-info/SalesInfo';
import SalesMetrics from '../sales-metrics/SalesMetrics';

import './account-overview.css';
import '../app.css';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <SalesInfo uploads={0} linesAdded={0} />
      <SalesMetrics uploadSuccess={0} linesSaved={0} />
    </div>
  )
}

export default AccountOverview;