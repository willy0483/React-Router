import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./Navbar.Styled";

export const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Concept">Concept</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </NavbarStyled>
    )
}

