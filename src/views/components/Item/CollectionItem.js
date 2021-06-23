import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Tags from "../Tags";
import {navigate} from "../../../lib/history";

const CollectionItem = ({data, onClick = () => {}}) => {

    return (
        <Container>
            <Thumb>
                <ThumbContent onClick={() => {
                    onClick(data)
                    navigate(`/collections/${data.id}/${data.title}`)

                }}>
                    <Left>
                        <Image>
                            {
                                data?.preview_photos[0] &&
                                <img src={data.preview_photos[0].urls.regular} alt=""/>
                            }
                        </Image>
                    </Left>
                    <Right>
                        <RTop>
                            <Image>
                                {
                                    data?.preview_photos[1] &&
                                    <img src={data.preview_photos[1].urls.regular} alt=""/>
                                }
                            </Image>
                        </RTop>
                        <RBottom>
                            <Image>
                                {
                                    data?.preview_photos[2] &&
                                    <img src={data.preview_photos[2].urls.regular} alt=""/>
                                }
                            </Image>
                        </RBottom>
                    </Right>
                </ThumbContent>
            </Thumb>
            <Desc>
                <h2>{data.title}</h2>
                <p>{data.total_photos} photos · Curated by {data.user.name}</p>
            </Desc>
            <Tags tags={data.tags}/>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  padding-bottom: 70%;
  position: relative;
  cursor:pointer;
  &:hover {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: 0.3s;
    pointer-events: none;
  }
`;

const ThumbContent = styled.div`
position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 6px;
  overflow: hidden;
`;
const Left = styled.div`
width: 70%;
  
`;

const Right = styled.div`
width: 30%;
  padding-left: 2px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`;

const RTop = styled.div`
padding-bottom: 1px;
  height: 50%;
`;

const RBottom = styled.div`
padding-top: 1px;
  height: 50%;
`;

const Desc = styled.div`
  padding: 10px 0;

  h2 {
    font-size: 18px;
    color: #111;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 8px;

  }

  p {
    font-size: 14px;
    color: #767676;
    font-weight: 400;
  }
`;


export default CollectionItem;