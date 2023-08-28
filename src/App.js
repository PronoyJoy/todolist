import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/signInPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;