import React from 'react';
import styled from 'styled-components';

const CreatePost = (bgImg) => { 
    const DivStyle = styled.div`
          width:620px;
          height: 330px;
          margin-right: 10px;
          border-radius: 10px;
          background:white;
          background-image: url(${process.env.PUBLIC_URL + bgImg}) ;
          background-size: cover;
          float: left;
          h2 {
              color: black;
              font-size: 36px; 
          };
      `;
    return DivStyle;
  }

export default CreatePost;