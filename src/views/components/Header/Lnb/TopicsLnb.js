import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from "react-router-dom";
import cn from 'classnames';
import ScrollMenus from "../../ScrollMenus";

const TopicsLnb = ({data}) => {

    const renderMenu = (item, index) => {
        return (
            <NavItem key={index}>
                <NavLink  className={cn({isActive: location.pathname === `/topics/${item.slug}`})}
                          to={`/topics/${item.slug}`}
                >{item.title}</NavLink>
            </NavItem>
        )
    }

    const location = useLocation();

    return (
        <Container>
            <Nav>
                <NavItem>
                    <NavLink className={cn({isActive: location.pathname === '/'})} to={'/'}>Editorial</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={cn({isActive: location.pathname === '/following'})} to={'/following'}>Following</NavLink>
                </NavItem>

                <Bar/>

                <ScrollMenus data={data}
                             renderMenu={renderMenu}

                />

                <NavItem>
                    <NavLink className={cn({isActive: location.pathname === '/topics'})} to={'/topics'}>View all</NavLink>
                </NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 8%), 0 0 1px rgb(1 0 0 / 10%);
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background:#fff;
  z-index: 10;
`;

const NavItem = styled.div`
 &:first-child,
 &:last-child {
   margin: 0 4px;
 }
`;

const NavLink = styled(Link)`
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  color:#767676;
  padding: 0 16px;
  height: 56px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.3s;
  &:hover {
    color:#111;
  }
  &.isActive {
    color:#111;
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    height: 2px;
    background:#111;
  }
`;

const Bar = styled.div`
    width: 1px;
  height: 32px;
  background:#d1d1d1;
  
`;

export default TopicsLnb;