import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

const PhotoInfo = () => {

    const {photoById, photoDetailId} = useSelector(state => state.photos)

    return (
        <Container>
            PhotoInfo
            {photoById[photoDetailId].user.name}
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
`;

export default PhotoInfo;