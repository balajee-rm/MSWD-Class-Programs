import '../App.css';
import Button from '@material-ui/core/Button'
import { ComputerScience, Electrical, Mechanical, BioTech } from '../data'
import { useState } from 'react';

function Ex3() {

  const [dept, setDept] = useState(ComputerScience[0]);

  function handleCSE () {
    setDept(ComputerScience[0])
  }

  function handleECE () {
    setDept(Electrical[0])
  }

  function handleME () {
    setDept(Mechanical[0])
  }

  function handleBT () {
    setDept(BioTech[0])
  }

  return(
    <div>
      <div className='App-button'>
        <Button variant="outlined" onClick={handleCSE}>CSE</Button>
        <Button variant="outlined" onClick={handleECE}>ECE</Button>
        <Button variant="outlined" onClick={handleME}>ME</Button>
        <Button variant="outlined" onClick={handleBT}>BT</Button>
      </div>
      <div className='App-img'>
        <img src={dept.imageUrl} style={{width: "600px", height: "400px"}} />
      </div>
      <div className='App-title'>
        <h4> {dept.displayName} </h4>
      </div>
      <div className='App-description'>
        <p> {dept.description} </p>
      </div>
      <div className='App-hod'>
        <b><i>HOD: {dept.hod}</i></b>
      </div>
      <div className='App-list'>
        <b> Programmes Offered </b>
        <ul>
        {dept.programsOffered.map((course)=>(
          <li> {course} </li>
        ))}
        </ul>
        
      </div>
    </div>
  );
}

export default Ex3;
