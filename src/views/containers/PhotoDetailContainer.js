import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoDetail from "../components/PhotoDetail";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";

const PhotoDetailContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();
    const {photoById, photoRelated} = useSelector(state => state.photos)


    useEffect(() => {
        getPhotoDetail();
    }, [])

    const getPhotoDetail = () => {
        dispatch(Action.Creators.getPhotoDetail(id))
    }

    return (
        <Container>
            <PhotoDetail photoById={photoById}
                         photoRelated={photoRelated}
                         photoDetailId={id}
            />
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(PhotoDetailContainer);