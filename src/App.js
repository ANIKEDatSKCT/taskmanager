import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignUp from './Signup';
import TaskManager from './Task';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/task" element={<TaskManager />} />

      </Routes>
    </Router>
    
  );
}

export default App;
