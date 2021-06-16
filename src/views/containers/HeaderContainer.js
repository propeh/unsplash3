import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "../components/Header/Gnb";
import TopicsLnb from "../components/Header/Lnb/TopicsLnb";
import SearchLnb from "../components/Header/Lnb/SearchLnb";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/topics/redux";
import {CLIENT_ID} from "../../common/constants";
import {Route} from "react-router-dom";

const HeaderContainer = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const topics = useSelector(state => state.topics)

    useEffect(() => {
        getTopics();
    }, [])

    const getTopics = () => {
        dispatch(Action.Creators.getTopics({
            client_id: CLIENT_ID,
            per_page: 30
        }))
    }

    return (
        <Container>
            <Header/>
            <Route exact path={['/', '/topics/:slug', '/following']}>
                <TopicsLnb data={topics.list}/>
            </Route>
        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;