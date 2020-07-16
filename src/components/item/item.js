import React from 'react';
import styled from 'styled-components';

const Item = ({ imgUrl: [firstImg, secondImg], headerText, bodyText }) => (
  <InfoDiv>
    <Post img={firstImg}>
      <h2>{headerText[0]}</h2>
      <p>{bodyText[0]}</p>
    </Post>
    <Post img={secondImg}>
      <h2>{headerText[1]}</h2>
      <p>{bodyText[1]}</p>
    </Post>
  </InfoDiv>
)

export default Item;


const InfoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: large;
    height: 370px;
    vertical-align: bottom;    
    background-color: rgb(214, 233, 236);
    border-radius: 10px;
`;

const Post = styled.div`
  width:650px;
  height: 330px;
  margin: 18px 15px 18px 15px;
  background-image: url(${props => `${process.env.PUBLIC_URL}${props.img}`});
  border-radius: 10px;
  background-size: cover;
   
  h2 {
      color: white;
      font-size: 28px;
      
  };
`;