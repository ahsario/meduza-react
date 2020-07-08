import React from 'react';
import CreatePost from './itemComponent';
import styled from 'styled-components';

const Item = ({imgUrl, headerText, bodyText}) => {

const Post1 = CreatePost(imgUrl[0]);
const Post2 = CreatePost(imgUrl[1]);
 
const InfoDiv = styled.div`
    color: black;
    font-size: large;
    height: 370px;
    padding: 20px;
    background-color: rgb(214, 233, 236);
    border-radius: 10px;

`;   


   return (
      
    <InfoDiv>
      <Post1>
        <h2>{headerText[0]}</h2>
        <p>{bodyText[0]}</p>
      </Post1>
      <Post2>
        <h2>{headerText[0]}</h2>
        <p>{bodyText[0]}</p>
      </Post2>
    </InfoDiv>
     
    );
};
export default Item;