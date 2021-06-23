import React from 'react';
import styled from 'styled-components';
import {Button} from "../Button/Button.Styled";
import {IconFollow} from "../../../icons";
import {navigate} from "../../../lib/history";

const UserItem = ({data}) => {

    const onClick = () => {
        navigate(`/@${data.username}`)
    }

    const onClickFollow = (e) => {
        e.stopPropagation();
    }

    const onClickHire = (e) => {
        e.stopPropagation();
    }

    return (
        <Container onClick={onClick}>
            <Head>
                <UserProfile>
                    <Avatar>
                        <img src={data?.profile_image?.medium} alt=""/>
                    </Avatar>
                    <UserInfo>
                        <h2>{data.name}</h2>
                        <p>@{data.username}</p>
                    </UserInfo>
                </UserProfile>
                <ButtonGroup>
                    <ButtonFollow onClick={onClickFollow}>
                        <IconFollow/>
                    </ButtonFollow>
                    {
                        data.for_hire &&
                        <ButtonHire onClick={onClickHire}>
                            Hire
                        </ButtonHire>
                    }
                </ButtonGroup>
            </Head>
            <PreviewImages>
                <ul>
                    {
                        data.photos.map((item, index) => (
                            <li key={index}>
                                <Image>
                                    <img src={item?.urls?.small} alt=""/>
                                </Image>
                            </li>
                        ))
                    }
                </ul>
            </PreviewImages>
            <ButtonView>
                View profile
            </ButtonView>
        </Container>
    )
}

const Container = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 16px;
  transition: 0.3s;

  &:hover {
    border-color: #111;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin-right: 20px;
flex-shrink: 0;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  h2 {
    font-size: 18px;
    color: #111;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    color: #767676;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const ButtonFollow = styled(Button)`
  width: 42px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #d1d1d1;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: #111;

    svg {
      fill: #111;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    fill: #797979;
    transition: 0.3s;

  }
`;

const ButtonHire = styled(Button)`
  margin-left: 10px;
  width: 51px;
  height: 32px;
  border-radius: 3px;
  background: #007fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #006AFF;
  }
`;

const PreviewImages = styled.div`

  ul {
    display: flex;
    margin: 0 -4px;
  }

  li {
    width: 33.3333%;
    padding: 4px;
  }
`;

const Image = styled.div`
  padding-bottom: 80%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
    
`;
const ButtonView = styled(Button)`
height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color:#767676;
  border:1px solid #d1d1d1;
  border-radius: 4px;
  width: 100%;
  margin-top: 16px;
  transition: 0.3s;
  cursor:pointer;
  &:hover {
    border-color:#111;
  }
`;

export default UserItem;