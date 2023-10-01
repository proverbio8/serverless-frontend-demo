import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingButton from './LoadingButton';

describe('LoadingButton', () => {
  it('renders the button with props', () => {
    render(<LoadingButton loading={false}>Test</LoadingButton>);
    expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
  });

  it('renders the loader if loading is true', () => {
    render(<LoadingButton loading={true}>Test</LoadingButton>);
    expect(screen.queryByTestId('button-loading')).toBeInTheDocument();
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });

  it('renders the children if loading is false', () => {
    render(<LoadingButton loading={false}>Test</LoadingButton>);
    expect(screen.queryByTestId('button-loading')).not.toBeInTheDocument();
    expect(screen.queryByText('Test')).toBeInTheDocument();
  });
});
