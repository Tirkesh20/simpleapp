import React from 'react'
import {
    ProductsContainer,
    ProductHeading,
    ProductsWrapper,
    ProductBtn,
    ProductCard,
    ProductInfo, ProductTitle, ProductPrice, ProductDescription, ProductImg
} from './ProductElements';
const Products=({heading,data})=>{
    return(
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductsWrapper>
                {data.map((product,index)=>{
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescription>{product.description}</ProductDescription>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductBtn>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>

        </ProductsContainer>

    )
}

export default Products;
