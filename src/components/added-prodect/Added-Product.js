import React from "react";
import styled from "styled-components";
import AddedProductsItem from "./Added-Products-Item";

const AddedProducts = ({ addedProducts }) => {
    return (
        <Container>
            {addedProducts.map((el) => {
                return <AddedProductsItem data={el}></AddedProductsItem>
            })}
        </Container>
    )
}
const Container = styled.ul`
   display: flex;
   flex-wrap:wrap;
   margin: 0;
   padding: 0;
   width: 920px;
   justify-content: space-evenly;
`
export default AddedProducts