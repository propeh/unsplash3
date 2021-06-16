import React from 'react';
import styled from 'styled-components';

const TopicMenu = ({data}) => {

    return (
        <Container>
            <Keyword>
            {
                data.map((item, index) => (
                    <p key={index}>{item.title}</p>
                ))
            }
            </Keyword>
        </Container>
    )
}

const Container = styled.div`
`;

const Keyword = styled.div`
  display: flex;
  white-space: nowrap;
  flex-shrink: 0;
  
  p {
    padding: 0 10px;
  }
`;


export default TopicMenu;