jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { HashRouter as Router } from 'react-router-dom';

const List = require('../src/js/pages/List').default;
//const TestUtils = require('react-dom/test-utils');

describe('List', () => {
  it('renders three repo links', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Router>
        <List />
      </Router>
    );

    const repos = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'li');

    expect(repos.length).toEqual(3);
  });
});