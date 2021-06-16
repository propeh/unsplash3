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
`;

const Title = styled.h2`

`;

export default PhotoRelatedSection;