import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Ex1 from './components/Experiment1'
import Ex2 from './components/Experiment2'
import Ex3 from './components/Experiment3'
import Ex4 from './components/Experiment4'
import {Container, AppBar, Toolbar} from '@material-ui/core'

const App = (props) => {

  const s1 = {
    border: '1px solid red',
    width: '300px',
    boxShadow: '2px 3px 5px black',
    color: 'green',
    margin: 'auto',
    textAlign: 'center',
    textShadow: '1px 1px 2px blue, 1px 2px 1px yellow'
  }

  const s2 = {
    border: '3px solid green',
    margin: '20px'
  }

  const menu = {
     padding: 5
  }

  return (
    <Container>
    <Router>
      <div>
      <AppBar position="static">
       <Toolbar>
        <Link style={menu} to="/">Experiment 1</Link>
        <Link style={menu} to="/page2">Experiment 2</Link>
        <Link style={menu} to="/page3">Experiment 3</Link>
        <Link style={menu} to="/page4">Experiment 4</Link>
      </Toolbar>
      </AppBar>
      </div>

      <Switch>
        <Route path="/page2">
          <Ex2 s1 = {s1} s2 = {s2} />
        </Route>
        <Route path="/page3">
          <Ex3 />
        </Route>
        <Route path="/page4">
          <Ex4 />
        </Route>
        <Route path="/">
          <Ex1 s1 = {s1} s2 = {s2} />
        </Route>
      </Switch>
    </Router>
    </Container>
  )
}

export default App;
