import {useState} from 'react'

const Experiment2 = ({s1, s2}) => {
	const [ counter, setCounter ] = useState(0)
	const increaseByOne = () => setCounter(counter + 1)
  	const decreaseByOne = () => setCounter(counter - 1)

	return (
    <div style = {s1}>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        increment
      </button>
      <button onClick={decreaseByOne}>
        decrement
      </button>
    </div>
  )
}

export default Experiment2