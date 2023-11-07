import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" className={({isActive}) => isActive ? `${s.activeLink}`: "not-activeLink"}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? `${s.activeLink}`: "not-activeLink"}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({isActive}) => isActive ? `${s.activeLink}`: "not-activeLink"}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? `${s.activeLink}`: "not-activeLink"}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? `${s.activeLink}`: "not-activeLink"}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive}) => isActive ? `${s.activeLink}`: "not-activeLink"}>Settings</NavLink>
            </div>
        </nav>
    )
}


export default Navbar;
