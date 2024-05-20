import { NavLink } from 'react-router-dom'
import './nav.css'
const Nav = () => {
    return (
        <>
            <nav className='nav'> 
                <ul className="navbar">
                    <li className="home"><NavLink className="NavLink" to='/Home'>Home</NavLink></li>
                    <li className="home"><NavLink className="NavLink" to='/Contect'>Contect</NavLink></li>
                    <li className="home"><NavLink className="NavLink" to='/Prodouct'>Prodouct</NavLink></li>
                    <li className="home"><NavLink className="NavLink" to='/Mycar'>Mycar</NavLink></li>
                    <li className="home"><NavLink className="NavLink" to='/All'>All</NavLink></li>
                </ul >
            </nav>
        </>
    )
}
export default Nav;