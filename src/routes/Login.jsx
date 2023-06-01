import { useState } from 'react'
// import { redirect } from 'react-router-dom'
import { account } from '../appwrite'

const Login = () => {

  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const promise = account.createEmailSession(email, password)
    promise.then((response) => {
      console.log(response)
      // redirect('/')
    }, (error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
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

        <button type="submit">Login</button>
        <a href="#">Sign Up</a>
      </form>
    </div>
  );
}

export default Login