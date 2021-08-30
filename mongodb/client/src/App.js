import axios from 'axios'
import React, {useState} from 'react'

const Display = ({data}) => {
  if (data !== null) {
      return (
        <div>
          {data.map ((obj) => {
          console.log("obj = " + obj.name)
          return <p>{obj.name}, {obj.dept}, {obj.course}</p>
          })}
        </div>
      )
  }
  else {
    return "Loading"
  }
}

const App = () => {
  const [data, setData] = useState (null);

  if(data === null) {
    axios.get(`http://localhost:8081/notes`)
    .then(res => {
      setData(res.data)
      console.log (res.data)
    })
  }

  return (
    <div>
      Page Running
      <br/>
      <Display data = {data} />
    </div>
  )
}

export default App
