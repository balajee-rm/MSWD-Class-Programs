import {useState} from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'

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

  const Disp_Agent = ({agents}) => {
    if (agents !== null) {
    return (
      <div>
        <p> { agents.data[2].displayName } </p>
        <img src = {agents.data[2].displayIcon} alt = "Avator" width = '100' />
      </div>
    )
  }
  else {
    return (
      <div>
        <p> click agent button to fetch the data and display </p>
      </div>
    )
  }
  }

const Experiment3 = () => {
	const [nav, setNav] = useState("")
  const [agents, setAgents] = useState(null)

	const changeView = (val) => {
		setNav (val);
	}

  const getAgents = () => {
    axios.get(`https://valorant-api.com/v1/agents/`)
      .then(res => {
        setAgents(res.data);
      })
  }

  if (nav === "Agents") {
    getAgents();
  }

	return (
    <div style = {s1}>

    <div>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView("Agents")}> Agents </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView("Wepones")}> Wepones </Button>
    </div>

      <p> welcome to API Data Fetching </p>
      <Disp_Agent agents = {agents} />
    </div>
    )
}

export default Experiment3