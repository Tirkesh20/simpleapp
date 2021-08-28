import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from "react-icons/all";

export const SideBarContainer=styled.aside`
position:fixed;
  z-index:999;
  width:350px;
  height:100%;
  background: white;
  display:grid;
  align-items: center;
  top: 0;
  transition:0.3s ease-in-out;
  right:${({isOpen})=>(isOpen?'0':'-1000px')};
  
  @media (max-width:400px){
    width: 100%;
  }
`

export const CloseIcon=styled(FaTimes)`
    color:#000;
`
export const Icon = styled.div`
position:absolute;
  top: 1.2rem;
  right:1.5rem;
  background:transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarMenu=styled.div`
display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3,80px);
  text-align:center;
  
  @media(max-width:400px) {
    grid-template-rows: repeat(3,60px);
  }
`

export const SidebarLink=styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  
  &:hover{
    color:#e9ba23 ;
    transition: 0.2s ease-in-out;
  }
`
export const SideBtnWrap=styled.div`
    display:flex;
  justify-content: center;
`
export const SideBarRoute=styled(Link)`
  background:black;
  white-space: nowrap;
  padding:16px 60px;
  color:white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover{
    transition: 0.2s ease-in-out;
    background: black;
    color: #e9ba23 ;
  }
`
