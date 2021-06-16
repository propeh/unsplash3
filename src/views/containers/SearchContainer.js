import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Route, withRouter} from 'react-router-dom';
import {Action} from "../../redux/search/redux";
import SearchLnb from "../components/Header/Lnb/SearchLnb";
import PhotoList from "../components/List/PhotoList";
import GridList from "../components/List/GridList";
import CollectionItem from "../components/Item/CollectionItem";
import UserItem from "../components/Item/UserItem";
import {ContentContainer} from "../components/Layout/Layout.Style";
import RelatedSearches from "../components/Search/RelatedSearches";

const SearchContainer = ({match, location, history}) => {

    const {category, query} = match.params;
    const dispatch = useDispatch();

    const {photos, collections, users, related_searches} = useSelector(state => state.search);

    const totals = {
        photos: photos.total,
        collections: collections.total,
        users: users.total
    };

    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            query,
            page: 1,
            per_page: 20,

        }))
    }

    const renderCollectionItem = (item, index) => <CollectionItem key={index} data={item}/>

    const renderUserItem = (item, index) => <UserItem key={index} data={item}/>

    return (
        <Container>
            <Route exact path={'/search/:category/:query'}
                   render={(props) => <SearchLnb {...props} totals={totals}/>}
            />


            <ContentContainer>
                <Head>
                    <Title>{query}</Title>
                    <RelatedSearches data={related_searches}/>
                </Head>
                <Route exact path={'/search/photos/:query'}>
                    <PhotoList data={photos.results}/>
                </Route>
                <Route exact path={'/search/collections/:query'}>
                    <GridList data={collections.results} renderItem={renderCollectionItem}/>
                </Route>
                <Route exact path={'/search/users/:query'}>
                    <GridList data={users.results} renderItem={renderUserItem}/>
                </Route>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

const Head = styled.div`
  padding: 60px 0 72px;
`;

const Title = styled.h1`
  font-size: 46px;
  text-transform: capitalize;
  margin-bottom: 24px;
`;

export default withRouter(SearchContainer);