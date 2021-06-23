import React from 'react';
import styled from 'styled-components';
import {IconCheckBox} from "../../../icons";
import {navigate} from "../../../lib/history";
import {useDispatch} from "react-redux";
import {Action} from "../../../redux/photos/redux";

const UserProfile = ({profileImage, name, username, forHire}) => {

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(Action.Creators.updateState({
            photoPopup: false
        }))
        navigate(`/@${username}`)
    }

    return (
        <Container onClick={onClick}>
            <Avatar>
                <img src={profileImage} alt=""/>
            </Avatar>
            <Info>
                <h2>{name}</h2>
                {
                    forHire
                        ?
                        <p>
                            Available for hire <IconCheckBox/>
                        </p>
                        :
                        <p>
                            @{username}
                        </p>
                }
            </Info>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`;

const Avatar = styled.div`
  margin-right: 8px;
  flex-shrink: 0;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  h2 {
    font-size: 15px;
    color: #111;
    margin-bottom: 3px;
  }

  p {
    font-size: 11px;
    color: #767676;
    svg {
      width: 11px;
      height: 11px;
      margin-left: 4px;
    }
  }
`;

export default UserProfile;