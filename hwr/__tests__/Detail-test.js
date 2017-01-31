jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Detail = require('../src/pages/Detail').default;

describe('Detail', () => {

  it('start with zero commits', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    expect(rendered.state.commits.length).toEqual(0);
  });

  it('shows commits by default', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    expect(rendered.state.mode).toEqual('commits');
  });

  it('shows forks when the button is tapped', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    const forksButton = rendered.refs.forks;
    TestUtils.Simulate.click(forksButton);
    expect(rendered.state.mode).toEqual('forks');
  });

  it('fetches fork from GitHub', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: 'react'}} />
    );

    setTimeout(() => {
      console.log('In waitFor: ' + rendered.state.forks.length);
      return rendered.state.forks.length > 0;
    }, "commit to be set", 2000);

    afterEach(() => {
      expect(rendered.state.forks.length).toEqual(30);
    });
  });

})
