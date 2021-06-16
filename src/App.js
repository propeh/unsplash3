import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import qs from 'qs';

import {GlobalStyle} from "./style/GlobalStyle";
import Routes from "./Routes";
import HeaderContainer from "./views/containers/HeaderContainer";
import {Action} from "./redux/auth/redux";
import {CLIENT_ID, CLIENT_SECRET} from "./common/constants";
import {getAccessToken} from "./lib/localStorageData";
import history from "./lib/history";
import PhotoPopupContainer from "./views/containers/PhotoPopupContainer";

const App = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    const token = getAccessToken();

    useEffect(() => {
        if (!!params.code) {
            getToken();
        }
    }, [])

    useEffect(() => {
        if(token) {
            getMe();
        }
    }, [token])

    const getToken = () => {
        dispatch(Action.Creators.getToken({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: 'http://localhost:3000',
            code: params.code,
            grant_type: "authorization_code",
        }))
    }

    const getMe = () => {
        dispatch(Action.Creators.getMe());
    }

    useEffect(() => {
        history.listen((location, action) => {
            if(action === 'PUSH') {
                window.scroll(0, 0)
            }
        })
    }, [])

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <PhotoPopupContainer/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;