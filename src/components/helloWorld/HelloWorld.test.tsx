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

    expect(documentBody).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <label>
                <input
                  checked=""
                  id="langEN"
                  name="lang"
                  type="radio"
                  value="en"
                />
                English
              </label>
              <label>
                <input
                  id="langNO"
                  name="lang"
                  type="radio"
                  value="no"
                />
                Norwegian
              </label>
              <h1
                id="title"
              >
                Hello World
              </h1>
            </div>
          </div>
        </body>,
        "container": <div>
          <div>
            <label>
              <input
                checked=""
                id="langEN"
                name="lang"
                type="radio"
                value="en"
              />
              English
            </label>
            <label>
              <input
                id="langNO"
                name="lang"
                type="radio"
                value="no"
              />
              Norwegian
            </label>
            <h1
              id="title"
            >
              Hello World
            </h1>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });

  it('should change the language', () => {
    const radioNo = screen.getByRole('radio', { name: 'Norwegian' });
    const radioEn = screen.getByRole('radio', { name: 'English' });

    expect(radioNo).not.toBeChecked();
    expect(radioEn).toBeChecked();

    userEvent.click(screen.getByRole('radio', { name: 'Norwegian' }));

    expect(radioNo).toBeChecked();
    expect(radioEn).not.toBeChecked();

    expect(
      screen.queryByRole('heading', { name: 'Hello World' })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Hallo Verden' })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('radio', { name: 'English' }));

    expect(radioNo).not.toBeChecked();
    expect(radioEn).toBeChecked();

    expect(
      screen.getByRole('heading', { name: 'Hello World' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Hallo Verden' })
    ).not.toBeInTheDocument();

    expect(documentBody).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <label>
                <input
                  checked=""
                  id="langEN"
                  name="lang"
                  type="radio"
                  value="en"
                />
                English
              </label>
              <label>
                <input
                  id="langNO"
                  name="lang"
                  type="radio"
                  value="no"
                />
                Norwegian
              </label>
              <h1
                id="title"
              >
                Hello World
              </h1>
            </div>
          </div>
        </body>,
        "container": <div>
          <div>
            <label>
              <input
                checked=""
                id="langEN"
                name="lang"
                type="radio"
                value="en"
              />
              English
            </label>
            <label>
              <input
                id="langNO"
                name="lang"
                type="radio"
                value="no"
              />
              Norwegian
            </label>
            <h1
              id="title"
            >
              Hello World
            </h1>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
