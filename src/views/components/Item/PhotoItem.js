import React from 'react';
import styled from 'styled-components';
import {IconAddToCollection, IconLikePhoto, IconPhotoDownload} from "../../../icons";

const PhotoItem = ({item, onClickPhoto = () => {}}) => {

    const {urls, id, user} = item

    return (
        <Container onClick={() => onClickPhoto(id)}>
            <Image>
                <img src={urls.regular} alt=""/>
                <Cover>
                    <Buttons>
                        <Button>
                            <IconLikePhoto/>
                        </Button>
                        <Button>
                            <IconAddToCollection/>
                        </Button>
                    </Buttons>
                    <Info>
                        <UserInfo>
                            <Profile>
                                <img src={user?.profile_image?.small} alt=""/>
                            </Profile>
                            <Desc>
                                <h3>{user?.name}</h3>
                                <p></p>
                            </Desc>
                        </UserInfo>
                        <Download>
                            <Button>
                                <IconPhotoDownload/>
                            </Button>
                        </Download>
                    </Info>
                </Cover>
            </Image>
        </Container>
    )
}

const Container = styled.div`
  padding: 10px 0;
`;

const Image = styled.div`
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }


`;

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.6);
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  & + & {
    margin-left: 8px;
  }

  svg {
    fill: #797979;
    width: 16px;
  }

  &:hover {
    background-color: #fff;

    svg {
      fill: #111;
    }
  }
`;

const Info = styled.div`
  flex: 1;
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`;

const Profile = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  width: 32px;
  height: 32px;
  img {
    height: 100%;
  }
`;

const Desc = styled.div`
  margin-left: 5px;

  h3 {
    color: #fff;
    font-size: 15px;
  }

`;

const Download = styled.div`
    
`;

export default PhotoItem;