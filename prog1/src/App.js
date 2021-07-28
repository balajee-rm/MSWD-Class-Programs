import React, {useState, useEffect} from 'react'
import Note from './components/Notes'
import Login from './services/Login'
import Notification from './components/Notifications'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')  
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')

  useEffect (() => {
    console.log ("useEffect - begning => user = " + user + ", token = " + token + ", local storage = " + window.localStorage.getItem("name"));
    if (user !== '') {
      setToken(`bearer ${user}`);
      window.localStorage.setItem('name', token)
    }
      console.log ("useEffect - end => user = " + user + ", token = " + token + ", local storage = " + window.localStorage.getItem("name"));    
  }, [user, token])

  const logout = () => {
    setUser('')
    setToken('')
    window.localStorage.removeItem('name')
    window.localStorage.clear()
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (Login(password) === "true")
    {
      setUser("user_object")
      //setToken(`bearer ${user}`);
      //window.localStorage.setItem('name', token)
      console.log ("Login => user = " + user + ", token = " + token + ", local storage = " + window.localStorage.getItem("name"));
      setUsername('')
      setPassword('')
    } 
    else {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }
  console.log("local storage = " + window.localStorage.getItem('name'))
  if (window.localStorage.getItem('name') !== null) {
  //if (token !== '') {
    setNotes(notes.concat(noteObject))
  }
  setNewNote('')
}

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form> 

      <Notification message={errorMessage} />

      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form> 
      
      <button onClick = {logout}> logout </button>
    </div>
  )
}

export default App