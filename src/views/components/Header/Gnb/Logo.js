import React from 'react';
import styled from 'styled-components';
import {IconLogo} from "../../../../icons";
import {useHistory} from "react-router";

const Logo = ({withText}) => {

    const history = useHistory();

    return (
        <Container onClick={() => history.push('/')}>
            <IconLogo/>

            {
                withText &&
                <Text>
                    <h1>Unsplash</h1>
                    <h2>Photos for everyone</h2>
                </Text>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`;

const Text = styled.div`
    margin-left: 12px;
  h1 {
    font-size: 15px;
    font-weight: bold;
    color:#111;
  }
  h2 {
    font-size: 13px;
    font-weight: 600;
    color:#111;
    margin-top: 3px;
  }
`;

export default Logo;