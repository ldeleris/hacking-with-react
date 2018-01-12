jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { HashRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const Detail = require('../src/js/pages/Detail').default;

describe('Detail', () => {
  it('starts with zero commits', () => {
    const rendered = shallow(<Detail match={{ params: { repo: '' } }} />);

    expect(rendered.state().commits).toEqual([]);

  });

  it('shows commits by default', () => {
    const rendered = shallow(<Detail match={{ params: { repo: '' } }} />);

    expect(rendered.state().mode).toEqual('commits');
  });

  it('shows forks when the button is tapped', () => {
    const rendered = shallow(<Detail match={{ params: { repo: '' } }} />);

    rendered.find({ name: 'forks' }).simulate('click');

    expect(rendered.state().mode).toEqual('forks');
  });
  /*
    it('fetches forks from Github', async () => {
      const rendered = shallow(<Detail match={{ params: { repo: '' } }} />);
  
      rendered.find({ name: 'forks' }).simulate('click');
  
      await expect(rendered.state().forks.length).toEqual(30);
    });
  */
  it('fetches forks from a local source', () => {
    const rendered = shallow(<Detail match={{ params: { repo: '' } }} />);

    const testData = require('./forks.json');
    rendered.setState({ 'mode': 'forks', forks: testData });

    expect(rendered.state().forks.length).toEqual(30);
  });

  it('fetches forks and rendered from a local source', () => {
    const rendered = shallow(<Detail match={{ params: { repo: '' } }} />);

    const testData = require('./forks.json');

    rendered.instance().saveFeed('forks', testData);
    rendered.find({ name: 'forks' }).simulate('click');


    const forks = rendered.find('.github');

    expect(forks.length).toEqual(30);
  });
});