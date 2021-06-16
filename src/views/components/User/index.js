import React from 'react';
import styled from 'styled-components';

const User = ({data}) => {

    return (
        <Container>
            <img src={data.profile_image.small} alt=""/>
            <span>{data.name}</span>
        </Container>
    )
}

const Container = styled.div`
margin-left: 10px;
  display: flex;
  align-items: center;
  
    img {
      border-radius: 50%;
      margin-right: 10px;
    }
  span {
    font-size: 14px;
    color: #767676;
  }
`;

export default User;