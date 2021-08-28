import React from 'react'
import {
    CloseIcon,
    Icon,
    SideBarContainer,
    SidebarLink,
    SidebarMenu,
    SideBarRoute,
    SideBtnWrap
} from "./SidebarElements";

const SideBar=({isOpen,toggle})=>{
    return(
        <>
         <SideBarContainer isOpen={isOpen} onClick={toggle}>
             <Icon onClick={toggle}>
                 <CloseIcon />
             </Icon>
             <SidebarMenu>
                 <SidebarLink to="/">Trendy</SidebarLink>
                 <SidebarLink to="/">New Collection</SidebarLink>
                 <SidebarLink to="/">List</SidebarLink>
             </SidebarMenu>
             <SideBtnWrap>
                 <SideBarRoute to="/">Get your s now</SideBarRoute>
             </SideBtnWrap>
         </SideBarContainer>
        </>)
}
export default SideBar;
