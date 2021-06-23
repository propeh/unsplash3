import React from 'react';
import styled from 'styled-components';
import PhotoInfo from "./PhotoInfo";
import PhotoRelatedSection from "./PhotoRelatedSection";
import PhotoList from "../List/PhotoList";
import GridList from "../List/GridList";
import Tags from "../Tags";
import CollectionItem from "../Item/CollectionItem";
import {ContentContainer} from "../Layout/Layout.Style";

const PhotoDetail = ({onClickItem, photoById, photoRelated, photoDetailId}) => {

    const renderCollectionItem = (item, index) => <CollectionItem key={index} data={item} onClick={onClickItem}/>

    return (
        <Container>
            {
                photoById[photoDetailId] &&
                <PhotoInfo data={photoById[photoDetailId]}/>
            }
            <ContentContainer>
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
                        <Tags tags={photoById[photoDetailId]?.tags} onClick={onClickItem}/>
                    </PhotoRelatedSection>
                }
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 100px;
`;

export default PhotoDetail;