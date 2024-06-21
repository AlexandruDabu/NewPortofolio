import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import AppLayout from './AppLayout';
import About from "./NavComponents/About";
import Resume from "./NavComponents/Resume";
import Education from "./NavComponents/Education";
import Projects from "./NavComponents/Projects";
import Contact from "./NavComponents/Contact";
import ErrorPage from "./NavComponents/ErrorPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path='/' element={<AppLayout/>}>
                <Route path='/about' element={<About/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/error' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
