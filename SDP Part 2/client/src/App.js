import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import Ex3 from './components/Ex3';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';

function App({store}) {
  console.log(store.getState())

  function Page() {
    if(store.getState().NavigationReducer === "Registration") {
      return(
        <div>
          <Registration />
        </div>
      );
    }
    if(store.getState().NavigationReducer === "Registration") {
      return(
        <div>
          <Login store = {store} />
        </div>
      );
    }
    if(store.getState().NavigationReducer === "Ex3") {
      return(
        <div>
          <Ex3 />
        </div>
      );
    }
  }

  return(
    <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"70px", height:"70px" }} />
          <p>Website title goes here</p>
        </div>

        <div className="App-body">
          <Container>
            <Navigation store={store}/>
            <Page />
          </Container>
        </div>
      
    </div>
  );
}

export default App;



