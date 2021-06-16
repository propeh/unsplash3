import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Menu from "./Menu";

const Nav = () => {

    return (
        <Container>
            <NavItem>
                <NavLink>
                    Brands
                    <Label>New</Label>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>Explore</NavLink>
            </NavItem>

            <Menu/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const NavItem = styled.div`
`;

const NavLink = styled(Link)`
  font-size: 14px;
  color:#767676;
  height: 62px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor:pointer;
  transition: 0.2s;
  &:hover {
    color:#111;
  }
`;

const Label = styled.span`
  position: relative;
  font-size: 10px;
  top: -10px;
  background: linear-gradient(94deg,#ff2a2a,#7074ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  margin-left: 3px;
`;

export default Nav;