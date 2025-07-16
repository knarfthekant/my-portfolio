import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/pages/HomePage';
import ContactsPage from './components/pages/ContactsPage';
import ProjectsPage from './components/pages/ProjectsPage';

const App = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
