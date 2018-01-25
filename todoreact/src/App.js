import React, { Component } from 'react';
import Date from './Date.js';
import TaskList from './TaskList.js';
import Navigation from './Navigation.js';
import AddButton from './AddButton.js';
import {Grid} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Grid>
          <Date />
          <br />
          <TaskList />
          <br />
          <AddButton />
        </Grid>
      </div>
    );
  }
}

export default App;
