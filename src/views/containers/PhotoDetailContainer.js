import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoDetail from "../components/PhotoDetail";
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Action} from "../../redux/photos/redux";

const PhotoDetailContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        getPhotoDetail();
    }, [id])

    const getPhotoDetail = () => {
        dispatch(Action.Creators.getPhotoDetail(id))
    }

    return (
        <Container>
            <PhotoDetail/>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(PhotoDetailContainer);