import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('aria-live', 'polite');
  });

  it('renders with custom text', () => {
    const customText = 'Please wait...';
    render(<LoadingSpinner text={customText} />);

    const loadingText = screen.getByText(customText);
    expect(loadingText).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size='small' />);
    let spinner = screen.getByRole('status').querySelector('div');
    expect(spinner?.className).toMatch(/small/);

    rerender(<LoadingSpinner size='large' />);
    spinner = screen.getByRole('status').querySelector('div');
    expect(spinner?.className).toMatch(/large/);
  });

  it('has correct accessibility attributes', () => {
    const text = 'Loading data...';
    render(<LoadingSpinner text={text} />);

    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('aria-live', 'polite');

    const textElement = screen.getByLabelText(text);
    expect(textElement).toBeInTheDocument();
  });

  it('renders spinner circles', () => {
    render(<LoadingSpinner />);

    const spinner = screen.getByRole('status');
    const circles = spinner.querySelectorAll('div');
    expect(circles.length).toBeGreaterThan(0);
  });
});
