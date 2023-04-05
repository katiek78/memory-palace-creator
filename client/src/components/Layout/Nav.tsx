import { NavLink } from "react-router-dom";

const Nav : React.FC = () => {
    const activeStyleObject = { color: '#BB00BB' };
    const nonactiveStyleObject = { color: '#000000' }

    return(<>
        <nav>
            <ul className='nav__ul'>
                <li className='nav__li'><NavLink className='nav__a' to="/" style={({ isActive }) =>
                isActive ? activeStyleObject : nonactiveStyleObject}>Home</NavLink></li>
                <li className='nav__li'><NavLink className='nav__a' to="/mypage"  style={({ isActive }) =>
                isActive ? activeStyleObject : nonactiveStyleObject}>MyPage</NavLink></li>
                
            </ul>
        </nav>
    </>);
}

export default Nav;