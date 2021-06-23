import React from 'react';
import styled from 'styled-components';

const PhotoRelatedSection = ({title, children}) => {

    return (
        <Container>
            <Title>Related {title}</Title>
            {children}
        </Container>
    )
}

const Container = styled.div`
  padding: 0 15px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 500;
color:#111;
`;

export default PhotoRelatedSection;