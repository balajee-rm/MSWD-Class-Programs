import React from 'react';
import PropTypes from "prop-types";
import './App.css';

interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
};

function App() {
  return (
    <div>
      <Welcome name="Balajee" />
    </div>
  );
}

export default App;
