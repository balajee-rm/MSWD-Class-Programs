import {ComputerScience, Electrical, Mechanical, BioTech} from '../data'
import {useState} from 'react'
import {Button} from '@material-ui/core'

 const s1 = {
    border: '1px solid red',
    width: '800px',
    boxShadow: '2px 3px 5px black',
    color: 'green',
    margin: 'auto',
    textAlign: 'center',
    textShadow: '1px 1px 2px blue, 1px 2px 1px yellow'
  }

  const s2 = {
  	margin: 20
  }

const Experiment3 = () => {
	const [dept, setDept] = useState(BioTech)

	const changeView = (dep) => {
		setDept (dep);
	}

	return (
    <div style = {s1}>

    <div>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(ComputerScience)}> CSE </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(Electrical)}> ECE </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(Mechanical)}> ME </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(BioTech)}> BT </Button>
    </div>

      <p> welcome to experiment Material UI</p>
      <img src = {dept[0].imageUrl} alt = "Bio Tech" width = '760' />
      <p> {dept[0].displayName} </p>
      <p> {dept[0].description} </p>
    </div>
    )
}

export default Experiment3