import React,{useState} from 'react'
import Navbar from "../Navbar";
import {HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItem, HeroP} from "./HeroElements";
import SideBar from "../SideBar";

const Hero=()=>{
    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    return(
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
                <HeroItem>
                <HeroH1>New collection</HeroH1>
                <HeroP>Available now </HeroP>
                <HeroBtn>Get your s now!</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}
export default Hero;
