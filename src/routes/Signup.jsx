import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { account } from '../appwrite'
import { ID } from 'appwrite'

const Signup = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const promise = account.create(
      ID.unique(),
      email,
      password,
      username
    );
    
    promise.then(
      function(response) {
        console.log(response);
        navigate('login')
      }, 
      function(error) {
        console.log(error)
      }
    )
  }
  

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Email</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
        <a href="#">Login</a>
      </form>
    </div>
  );
}

export default Signup