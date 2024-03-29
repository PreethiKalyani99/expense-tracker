import './App.css';
import { ExpenseTracker } from './components/ExpenseTracker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/expense-tracker'>
      <Routes>
        <Route exact path='/' element={<ExpenseTracker/>}/>
      </Routes>
    </Router>
  );
}

export default App;
