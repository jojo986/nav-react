import React from 'react';
import '../App.css';
import Nav from './Nav';
import PageContent from './PageContent';

function App() {
  return (
    <React.Fragment>
      <header><Nav /></header>
      <main className="container"><PageContent /></main>
    </React.Fragment>
  );
}

export default App;
