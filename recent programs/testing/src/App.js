import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick(){
    document.getElementsByTagName("h1")[0].innerHTML="new text"
  }
  return (
     <div>
      <h1>mswd class</h1>
      <button onClick={handleClick}>change text</button>
     </div>
  );
}

export default App;
