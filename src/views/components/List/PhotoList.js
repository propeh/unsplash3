import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoItem from "../Item/PhotoItem";
import {useDispatch} from "react-redux";
import {Action} from "../../../redux/photos/redux";

const PhotoList = ({data = [], next}) => {

    const dispatch = useDispatch();

    const setGroups = (data) => {
        const groups = [[], [], []];
        const groupsHeight = [0, 0, 0];

        for(let i = 0; i < data.length; i++) {
            const minGroupsHeight = Math.min(...groupsHeight);
            const minHeightIndex = groupsHeight.indexOf(minGroupsHeight);

            groups[minHeightIndex].push(data[i]);

            const width = data[i].width;
            const height = data[i].height;
            const ratioHeight = height / width;

            groupsHeight[minHeightIndex] = groupsHeight[minHeightIndex] + ratioHeight;

        }

        return groups;
    }

    const groups = setGroups(data);

    const onClickPhoto = (id) => {
        window.history.pushState({}, null, `/photos/${id}`)
        dispatch(Action.Creators.openPhotoPopup(id))
    }

    return (
        <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={next}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <Container>
                <Groups>
                    {
                        groups.map((group, groupIndex) => (
                            <Group key={groupIndex}>
                                {
                                    group.map((item, index) => (
                                        <Col key={index}>
                                            <PhotoItem item={item}
                                                       onClickPhoto={onClickPhoto}/>
                                        </Col>
                                    ))
                                }
                            </Group>
                        ))
                    }
                </Groups>
            </Container>
        </InfiniteScroll>

    )
}

const Container = styled.div`

`;

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Group = styled.div`
    width: 33.3333%;
`;

const Col = styled.div`
    padding: 0 10px;
`;

export default PhotoList;