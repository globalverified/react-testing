import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      link
      <header>
        <h1 data-testid="heading">D14-Squard-6</h1>
        <h3 data-testid="subheading">
          <a href="#" data-testid="link">Sub-Heading</a>
          <a href="#" data-testid="link2">Sub-Heading2</a>
        </h3>
      </header>
      <section>
        <a className="link-self"
          href="https://google.com"
          target="_self"
          rel="external" data-testid="link">This link</a> will open in same tab and
        <a className="link-newtab"
          href="https://google.com"
          target="_blank"
          rel="external" data-testid="link">this link</a> will open in new tab.
      </section>
    </div>
  );
}

export default App;
