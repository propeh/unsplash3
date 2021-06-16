import React from 'react';
import styled from 'styled-components';
import qs from 'qs';

import {Button} from "../../Button/Button.Styled";
import {CLIENT_ID} from "../../../../common/constants";

const SignArea = () => {

    const params = {
        client_id: CLIENT_ID,
        redirect_uri: 'http://localhost:3000',
        response_type: 'code'
    }

    return (
        <Container>
            <StyledButton sort={'white'}>
                <a href={`https://unsplash.com/oauth/authorize?${qs.stringify(params)}`}
                   target={"_blank"}
                   rel="noreferrer"
                >Login</a>
            </StyledButton>
            <StyledButton sort={'info'}>Join free</StyledButton>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  border-left: 1px solid #d1d1d1;
  margin-left: 30px;
`;

const StyledButton = styled(Button)`
    margin-left: 14px;
  a {
    color: #767676;
    &:hover {
      color:#111;
    }
  }
`;

export default SignArea;