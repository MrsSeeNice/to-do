import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './containers/TodoPage';
import ContactPage from './containers/ContactPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
