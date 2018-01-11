jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { HashRouter as Router } from 'react-router-dom';

const Detail = require('../src/js/pages/Detail').default;

describe('Detail', () => {
  it('starts with zero commits', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Router>
        <Detail match={{ params: { repo: '' } }} />
      </Router>
    );

    expect(rendered.state.commits.length).toEqual(0);

  });
});