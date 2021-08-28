import styled from 'styled-components'

export const ProductsContainer=styled.div`
width:100vw;
  min-height: 100vw;
  padding:5rem calc((100vw - 1300px)/2);
  background-color:black;
  color: #fff;
`

export const ProductsWrapper=styled.div`
display:flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`
export const ProductCard=styled.div`
margin:0 2rem;
  line-height: 2;
  width:300px;
`
export const ProductImg=styled.img`
height:300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 2px 5px #fdc500;
`

export const ProductHeading=styled.h1`
font-size: clamp(2rem, 2.5vw,3rem);
text-align: center;
margin-bottom: 5rem;
`

export const ProductTitle=styled.h2`
font-weight: 400;
font-size: 1.5rem;
`

export const ProductInfo=styled.div`
  display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`
export const ProductDescription=styled.p`
margin-bottom: 1rem;
font-size: 1rem;
`

export const ProductPrice=styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`
export const ProductBtn=styled.button`
  font-size:1rem;
  padding:1rem 4rem;
  border: none;
  background:white;
  color: black;
  transition:0.2s ease-out;
  
  &:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor: pointer;
    color: black;
  }


`
