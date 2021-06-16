import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import SearchBox from "../SearchBox";
import Nav from "./Nav";
import Menus from "./Menus";
import SignArea from "./SignArea";

const Header = () => {

    return (
        <Container>
            <Logo/>
            <SearchBox/>
            <Nav/>
            <Menus/>
            <SignArea/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Header;