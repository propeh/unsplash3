import React from 'react';
import styled from 'styled-components';
import PhotoInfo from "./PhotoInfo";
import PhotoRelatedSection from "./PhotoRelatedSection";
import PhotoList from "../List/PhotoList";
import GridList from "../List/GridList";
import {useSelector} from "react-redux";
import Tags from "../Tags";
import CollectionItem from "../Item/CollectionItem";

const PhotoDetail = () => {

    const {photoById, photoRelated, photoDetailId} = useSelector(state => state.photos)

    const renderCollectionItem = (item, index) => <CollectionItem key={index} data={item}/>

    return (
        <Container>
            <PhotoInfo/>
            {
                photoRelated[photoDetailId] &&
                <PhotoRelatedSection title={'Photos'}>
                    <PhotoList data={photoRelated[photoDetailId]?.results}/>
                </PhotoRelatedSection>
            }
            {
                photoById[photoDetailId] &&
                <PhotoRelatedSection title={'Collections'}>
                    <GridList data={photoById[photoDetailId]?.related_collections?.results}
                              renderItem={renderCollectionItem}
                    />
                </PhotoRelatedSection>
            }
            {
                photoById[photoDetailId] &&
                <PhotoRelatedSection title={'Tags'}>
                    <Tags tags={photoById[photoDetailId]?.tags}/>
                </PhotoRelatedSection>
            }
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
`;

export default PhotoDetail;