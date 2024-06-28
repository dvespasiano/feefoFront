import React from 'react';
import { render } from '@testing-library/react';
import SupportContact from './SupportContact';

test('renders support contact information', () => {
    const { getByText, getByLabelText } = render(
        <SupportContact
            name="Support"
            email="support@feefo.com"
            phone="020 3362 4208"
        />
    );

    expect(getByLabelText('Support Initial')).toHaveTextContent('S');
    expect(getByText('Support')).toBeInTheDocument();
    expect(getByText('support@feefo.com')).toBeInTheDocument();
    expect(getByText('020 3362 4208')).toBeInTheDocument();
});
