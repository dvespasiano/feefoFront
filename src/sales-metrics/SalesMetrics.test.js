import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SalesMetrics from './SalesMetrics';

test('renders sales metrics', () => {
    render(<SalesMetrics uploadSuccess={0} linesSaved={0} />);

    const hasText = (node, text) => node.textContent.replace(/\s+/g, ' ').trim() === text;
  
    expect(screen.queryByText((content, node) => hasText(node, '%')));
    expect(screen.queryByText('UPLOAD SUCCESS')).toBeInTheDocument();
    expect(screen.queryByText('LINES SAVED')).toBeInTheDocument();
  });