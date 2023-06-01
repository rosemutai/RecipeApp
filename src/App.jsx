import { Route, Routes } from 'react-router-dom'
import Signup from './routes/Signup'
import Login from './routes/Login';

function App() {

  return (
    <div>
      <h2>Recipe-App</h2>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App
