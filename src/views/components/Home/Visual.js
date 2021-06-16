import React from 'react';
import styled from 'styled-components';
import SearchBox from "../SearchBox";
import {Link} from "react-router-dom";

const Visual = () => {

    return (
        <Container>
            <Content>
                <h1>Unsplash</h1>
                <h2>
                    The internet’s source of freely-usable images. <br/>
                    Powered by creators everywhere.
                </h2>

                <SearchBox shape={"square"}/>
                <Trending>
                    Trending:
                    <a href="https://unsplash.com/images/nature/flower"> flower</a>
                    <a href="https://unsplash.com/wallpapers">, wallpapers</a>
                    <a href="https://unsplash.com/backgrounds">, backgrounds</a>
                    <a href="https://unsplash.com/images/feelings/happy">, happy</a>
                    <a href="https://unsplash.com/images/feelings/love">, love</a>
                </Trending>
            </Content>
            <Info>
                <InfoItem>
                    <span className={"highLight"}>Photo of the Day</span> by <Link className={"highLight"} to={'/'}>Tobias Rademacher</Link>
                </InfoItem>
                <InfoItem>
                    Read more about the <Link className={"highLight"} to={'/'}>Unsplash License</Link>
                </InfoItem>
                <InfoItem>
                    <img src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" alt=""/>
                    <span className={"highLight"}>Start your website with Squarespace today.</span>
                </InfoItem>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  height: 600px;
  background: url("https://images.unsplash.com/photo-1615059966039-a5af93abcece?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=7599&amp;h=594 1x, https://images.unsplash.com/photo-1615059966039-a5af93abcece?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=7599&amp;h=594 2x") 50% / cover no-repeat;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  .highLight {
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color:#fff;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding-top: 144px;
  color:#fff;
  h1 {
    font-size: 46px;
    color:#fff;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    color:#fff;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 16px;
  }

`;

const Trending = styled.div`
  color: #fff;
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    &:hover {
      color:#fff;
    }
  }
`;

const Info = styled.div`
  display: flex;
  padding: 20px;
`;

const InfoItem = styled.div`
  color: rgba(255, 255, 255, 0.5);
  flex: 1;
  position: relative;
  font-size: 13px;

  &:nth-child(1) {
    text-align:left;
  }
  &:nth-child(2) {
    text-align:center;
  }
  &:nth-child(3) {
    text-align:right;
    color:#fff;
    opacity: 0.7;
    transition: 0.2s;
    cursor:pointer;
    &:hover {
      opacity: 1;
    }
    img {
      width: 150px;
      position: absolute;
      right: 0;
      bottom: 35px;
    }
  }
`;

export default Visual;