import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import SearchBox from "../../SearchBox";
import Nav from "./Nav";
import SignArea from "./SignArea";
import {Button} from "../../Button/Button.Styled";
import {useSelector} from "react-redux";
import Me from "./Me";

const Header = () => {

    const user = useSelector(state => state.auth.user);

    return (
        <Container>
            <Logo withText={true}/>
            <SearchBox shape={'round'}/>
            <Nav/>
            <Button sort={'outline'}>Submit a photo</Button>
            {
                user
                    ?
                    <Me data={user}/>
                    :
                    <SignArea/>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 1000;
`;


export default Header;