import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {navigate} from "../../../lib/history";

const Tags = ({tags, onClick = () => {}}) => {

    return (
        <Container>
            {
                tags.map((item, index) => (
                    <Tag key={index}
                         onClick={() => {
                             onClick(false)
                             navigate(`/search/photos/${item.title}`)
                         }}
                    >
                        {item?.title}
                    </Tag>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin-right: 8px;
  margin-top: 8px;
  background: #eee;
  color: #767676;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  border-radius: 4px;
  cursor:pointer;
  &:hover {
    color: #111;
    background:#e1e1e1;
  }
`;

export default Tags;