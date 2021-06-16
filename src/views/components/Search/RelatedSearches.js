import React from 'react';
import styled from 'styled-components';
import ScrollMenus from "../ScrollMenus";
import {Link} from "react-router-dom";

const RelatedSearches = ({data}) => {

    const renderMenu = (item, index) => (
        <NavLink key={index} to={`/search/photos/${item.title}`} className={"ellipsis"}>
            {item.title}
        </NavLink>
    )

    return (
        <Container>
            <ScrollMenus data={data} renderMenu={renderMenu}/>
        </Container>
    )
}

const Container = styled.div`

`;

const NavLink = styled(Link)`
  min-width: 143px;
  height: 39px;
  display: block;
  font-size: 14px;
  color: #767676;
  text-transform: capitalize;
  white-space: nowrap;
  border:1px solid #d1d1d1;
  border-radius: 4px;
  cursor:pointer;
  transition: 0.3s;
  line-height: 37px;
  text-align: center;
  & + & {
    margin-left: 8px;
  }
  &:hover {
    color:#111;
    border-color:#111;
  }

`;
export default RelatedSearches;