import React from 'react';
import logo from './logo.svg';
import StockIcon from './components/StockIcon';
import StockName from './components/StockName';
import StockTicker from './components/StockTicker';
import StockNameWithTickerAndIcon from './components/StockNameWithTickerAndIcon';
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

import './index.css';
function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;

/*
function App() {
  const ticker = "tse:ctc.a";
  const companyName = "Canadian Tire Corporation, Limited";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StockNameWithTickerAndIcon companyName={companyName} ticker={ticker} />
      </header>
    </div>
  );
}

export default App;*/
