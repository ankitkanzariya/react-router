import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Settings from './Settings';
import Main from "./Main"

const Nav = () => {
    return (
        <>
            <Router>
                <Main />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
            </Router>
        </>
    )
}

export default Nav;