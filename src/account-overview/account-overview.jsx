import React from 'react';
import SalesInfo from '../sales-info/SalesInfo';
import SalesMetrics from '../sales-metrics/SalesMetrics';
import SupportContact from '../support-contact/SupportContact';

import './account-overview.css';
import '../app.css';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <div className="account-container">
        <div  className="account-container-title">
        <p>Account Overview</p>
        </div>
      <SupportContact 
        name="Support" 
        email="support@feefo.com" 
        phone="020 3362 4208"
      />
        </div>
    <div className='account-overview-container'>
    <SalesInfo uploads={0} linesAdded={0} />
    <SalesMetrics uploadSuccess={0} linesSaved={0} />
    </div>
    </div>
  )
}

export default AccountOverview;