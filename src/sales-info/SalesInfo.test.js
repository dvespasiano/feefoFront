import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SalesInfo from './SalesInfo';

test('renders sales information', () => {
    render(<SalesInfo uploads={0} linesAdded={0} />);
    const hasText = (node, text) => node.textContent.replace(/\s+/g, ' ').trim() === text;
    expect(screen.getByText((content, node) => hasText(node, 'You had 0 uploads and 0 lines added.'))).toBeInTheDocument();
  });