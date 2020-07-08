import React, { Component } from 'react';
import BrowserDetection from 'react-browser-detection';
 
const browserHandler = {
  chrome: () => <div>Chrome is fantastic!</div>,
  googlebot: () => <div>Hi GoogleBot!</div>,
  default: (browser) => <div>Hi {browser}!</div>,
};
 
export default class App extends Component {
  render() {
    return (
      <BrowserDetection>
        { browserHandler }
      </BrowserDetection>
    );
  }
}