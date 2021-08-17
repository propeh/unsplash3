import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";
import {CLIENT_ID} from "../../common/constants";
import PhotoList from "../components/List/PhotoList";
import {ContentContainer} from "../components/Layout/Layout.Style";

const PhotoListContainer = () => {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPhotos();
    }, [page])

    const getPhotos = () => {
        dispatch(Action.Creators.getPhotos({
            page,
            client_id: CLIENT_ID,
            per_page: 10
        }))
    }

    const next = () => {
        setPage(p => p + 1)
    }

    // const onClickPhoto = (id) => {
    //     window.history.pushState({}, null, `/photos/${id}`)
    //     dispatch(Action.Creators.openPhotoPopup(id))
    // }

    return (
        <Container>
            <ContentContainer>
                <PhotoList data={photos.list} next={next}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoListContainer;