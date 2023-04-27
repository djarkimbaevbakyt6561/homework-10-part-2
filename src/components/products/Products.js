import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import ProductItem from "./Product-Item";
const totalPriceReducer = (state, action) => {
    if (action.type === CALCULATE) {

        return {
            ...state,
            totalPrice: state.totalPrice + action.price
        }
    }
    if (action.type === CALCULATE_IN_RENDER) {
        return {
            ...state,
            totalPrice: action.total
        }
    }
    return state
}
const CALCULATE = "CALCULATE"
const CALCULATE_IN_RENDER = "CALCULATE_IN_RENDER"

const Products = ({ onClick, products }) => {
    const [totalPrice, dispatchTotalPrice] = useReducer(totalPriceReducer, { totalPrice: 0 })
    function calculateTotalHandler(price) {
        dispatchTotalPrice({ type: CALCULATE, price: price })
    }
    function calculateTotalPriceHandler() {
        let total = 0;
        products.forEach((el) => {
            total += el.price;
        });
        
        dispatchTotalPrice({ type: CALCULATE_IN_RENDER, total: total })
    }
    ;

    useEffect(() => {
        console.log("hi");
        calculateTotalPriceHandler();
    }, [products]);

    return (
        <Container>
            <ProductContainer>
                <p>#</p>
                <p>Product</p>
                <p>Product Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </ProductContainer>
            <OrderedList>
                {products.map((el, index) => {
                    return (
                        <ProductItem
                            onClick={onClick}
                            id={el.id}
                            key={el.id}
                            number={index + 1}
                            image={el.image}
                            title={el.title}
                            price={el.price}
                            onPriceChange={calculateTotalHandler}
                        />
                    );
                })}
            </OrderedList>
            <p>TOTAL:{totalPrice.totalPrice}</p>
        </Container>
    );
};
export default Products
const ProductContainer = styled.div`
   display: flex;
   justify-content: space-around;
   font-weight: 600;
   border-top: 2px solid #E2E2E2;
   font-size: 16px;


`
const Container = styled.div`
   display: flex;
   width: 920px;
   flex-direction: column;
   margin-top: 10px;
`
const OrderedList = styled.ol`
    padding: 0;
    margin: 0;
`