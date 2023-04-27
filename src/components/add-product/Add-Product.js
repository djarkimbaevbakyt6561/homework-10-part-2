import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Input from '../UI/Input'
import { useState } from "react";
const AddProduct = ({onSubmit}) => {
    const [inputText, setInputText] = useState('');
    const [inputImage, setInputUrl] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    function getInputText(e) {
      setInputText(e.target.value);
    }
  
    function getInputUrl(e) {
      setInputUrl(e.target.value);
    }
  
    function getInputPrice(e) {
      setInputPrice(e.target.value);
    }
  
  
    function addProjectHandler(e) {
      e.preventDefault();
      const product = {
        title: inputText,
        image: inputImage,
        price: Number(inputPrice),
        id: Math.random()
      };
      onSubmit(product);
      setInputText('');
      setInputUrl('');
      setInputPrice('');
      localStorage.setItem("Products", JSON.stringify(product));
    }
    return (
        <Container>
            <Input maxLength='15' value={inputText} onChange={getInputText} type="text" name="title" id="title">Product Name</Input>
            <Input value={inputImage} onChange={getInputUrl} type="text" name="title" id="title">Image</Input>
            <Input maxLength='7' value={inputPrice} onChange={getInputPrice} type="number" name="title" id="title">Price</Input>
            <ButtonContainer>
                <Button onClick={addProjectHandler}>Add</Button>
            </ButtonContainer>
        </Container>
    )
}
const Container = styled.div`
   display: flex;
   margin-top: 20px;
   align-items: center;
   background-color: #EBEBEB;
   width: 920px;
   height: 100px;
   justify-content: space-evenly;
   border-radius: 7px;
`
const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   margin-top: 28px;
   margin-left: 36px;
   
`
export default AddProduct