import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import Actions from './components/Actions';
import Tasks from './components/Tasks';
import AddForm from './components/AddForm';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Actions />
      <div className="container">
        <Tasks />
        <AddForm />
      </div>
    </Fragment>
  )
}

export default App;
