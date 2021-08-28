import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from "./NavbarElements";

const Navbar=({toggle})=>{
    return(
        <>
            <Nav>
                <NavLink to='/'>----</NavLink>
                <NavIcon onClick={toggle}>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>)
}
export default Navbar;
