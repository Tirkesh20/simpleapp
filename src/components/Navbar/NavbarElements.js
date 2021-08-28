import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaShopify } from 'react-icons/fa'

export const Nav=styled.nav`
    background:transparent;
  height:80px;
  display:flex;
  justify-content:center;
  font-weight: 700;
`
export const NavLink=styled(Link)`
  color: #fff;
font-size: 2rem;
  display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

  @media (max-width:400px) {
    position:absolute;
    top: 10px;
    left: 25px;
  }
`

export const NavIcon=styled.div`
display:flex;
  position: absolute;
top: 25px;
right:10px;
cursor: pointer;
color: #fff;
  text-align: center;
  
  p{
    transform: translate(-175%,100%);
    font-weight: bold;
  }
  
`

export const Bars=styled(FaShopify)`
font-size: 2rem;
transform: translate(-50%, -15%);
`