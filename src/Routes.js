import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CVPage } from './Pages/CVPage';
import { TechStackPage } from './Pages/TechStackPage';
import { ProjectsPage } from './Pages/ProjectsPage';

export const RouteComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/CVPage' element={<CVPage />} />
                <Route exact path='/ProjectsPage' element={<ProjectsPage />} />
                <Route exact path='/TechStackPage' element={<TechStackPage />} />            </Routes>
        </Router>
    )
}