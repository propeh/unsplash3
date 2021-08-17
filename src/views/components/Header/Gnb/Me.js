import React from 'react';
import styled from 'styled-components';

const Me = ({data}) => {

    const onClickMe = () => {

    }

    return (
        <Container onClick={onClickMe}>
            <img src={data.profile_image.small} alt=""/>
            <span>{data.name}</span>
        </Container>
    )
}

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor:pointer;
  img {
    margin-right: 10px;
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    color: #111111;
    font-weight: 400;
  }
`;

export default Me;