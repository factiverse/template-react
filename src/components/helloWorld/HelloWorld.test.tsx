import * as React from 'react';
import HelloWorld from './HelloWorld';
import userEvent from '@testing-library/user-event';
import { render, screen, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';

let documentBody: RenderResult;

describe('HelloWold component', () => {
  beforeEach(() => {
    documentBody = render(<HelloWorld />);
  });

  it('should render Hello World', () => {
    expect(screen.queryByText('Hello World')).toBeInTheDocument();
  });

  it('should change the language', async () => {
    const radioNo = screen.getByRole('radio', { name: 'Norwegian' });
    const radioEn = screen.getByRole('radio', { name: 'English' });

    expect(radioNo).not.toBeChecked();
    expect(radioEn).toBeChecked();

    await userEvent.click(screen.getByRole('radio', { name: 'Norwegian' }));

    expect(radioNo).toBeChecked();
    expect(radioEn).not.toBeChecked();

    expect(
      screen.queryByRole('heading', { name: 'Hello World' })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Hallo Verden' })
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('radio', { name: 'English' }));

    expect(radioNo).not.toBeChecked();
    expect(radioEn).toBeChecked();

    expect(
      screen.getByRole('heading', { name: 'Hello World' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Hallo Verden' })
    ).not.toBeInTheDocument();
  });
});
