import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {IconSearchCollections, IconSearchPhotos, IconsSearchUsers} from "../../../../icons";
import {Link} from "react-router-dom";

const SearchLnb = ({match, totals}) => {

    const {category, query} = match.params;
    // const menuData = [
    //     {
    //         name: 'photos',
    //         to: `/search/photos/${query}`,
    //         isActive: category === 'photos',
    //         icon: <IconSearchPhotos/>,
    //     },
    //     {
    //         name: 'collections',
    //         to: `/search/collections/${query}`,
    //         isActive: category === 'collections',
    //         icon: <IconSearchCollections/>,
    //     },
    //     {
    //         name: 'users',
    //         to: `/search/users/${query}`,
    //         isActive: category === 'users',
    //         icon: <IconsSearchUsers/>,
    //     },
    // ]

    const menuData = [
        {
            name: 'photos',
            icon: <IconSearchPhotos/>
        },
        {
            name: 'collections',
            icon: <IconSearchCollections/>
        },
        {
            name: 'users',
            icon: <IconsSearchUsers/>
        }
    ]

    const getMenes = (data) => {
        return data.map((item) => (
            {
                name: item.name,
                to: `/search/${item.name}/${query}`,
                isActive: category === item.name,
                icon: item.icon,
                total: totals[item.name]
            }
        ))
    }

    const menus = getMenes(menuData);

    const setTotal = (num) => (num / 1000 > 1) ? (num / 1000).toFixed() + 'k' : num;

    return (
        <Container>
            <Nav>
                {
                    menus.map((item, index) => (
                        <NavItem key={index} className={cn({isActive:item.isActive})}>
                            <NavLink to={item.to}>
                                {item.icon}
                                {item.name}
                                <Total>
                                    {
                                        setTotal(item.total)
                                    }
                                </Total>
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
        </Container>
    )
}

const Container = styled.div`
padding: 0 32px;
  border-bottom:1px solid #d1d1d1;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
    margin-right: 30px;

`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 56px;
  color: #797979;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  &:hover {
    color:#111;
  }
  svg {
    width: 18px;
    fill: #797979;
    margin-right: 8px;
    &:hover {
      fill: #111;
    }
    .isActive & {
      fill: #111;
    }
  }
  .isActive & {
    color:#111;
    box-shadow: inset 0 -2px 0 #111;
  }
`;

const Total = styled.div`
    
`;

export default SearchLnb;