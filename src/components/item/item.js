import React from 'react';
import styled from 'styled-components';

const Item = ({ imgUrl: [firstImg, secondImg], headerText, bodyText }) => (
  <InfoDiv>
    <Post img={firstImg}>
      <h2>{headerText[0]}</h2>
      <p>{bodyText[0]}</p>
    </Post>
    <Post img={secondImg}>
      <h2>{headerText[0]}</h2>
      <p>{bodyText[0]}</p>
    </Post>
  </InfoDiv>
)

export default Item;


const InfoDiv = styled.div`
    color: black;
    font-size: large;
    height: 370px;
    padding: 20px;
    background-color: rgb(214, 233, 236);
    border-radius: 10px;
`;

const Post = styled.div`
  width:620px;
  height: 330px;
  margin-right: 10px;
  background-image: url(${props => `${process.env.PUBLIC_URL}${props.img}`});
  border-radius: 10px;
  background-size: cover;
  float: left;

  h2 {
      color: black;
      font-size: 36px;
  };
`;