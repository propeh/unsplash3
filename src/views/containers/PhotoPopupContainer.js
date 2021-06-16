import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import PhotoDetail from "../components/PhotoDetail";
import {Action} from "../../redux/photos/redux";
import {useLocation} from "react-router-dom";

const PhotoPopupContainer = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const photoPopup = useSelector(state => state?.photos?.photoPopup);

    useEffect(() => {
        if(photoPopup) {
            document.querySelector('body').classList.add('fixed')
        } else {
            document.querySelector('body').classList.remove('fixed')
        }
    }, [photoPopup])

    const onClosePopup = () => {
        dispatch(Action.Creators.updateState({
            photoPopup: false
        }))
        window.history.pushState({}, null, location.pathname)
    }

    if (!photoPopup) return null;

    return ReactDOM.createPortal(
        <Container>
            <Screen onClick={onClosePopup}/>
            <Contents>
                <Track>
                    <PhotoDetail/>
                </Track>
            </Contents>
        </Container>,
        document.getElementById("photo-popup")
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Contents = styled.div`
  max-width: 85%;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  height: 100vh;
`;

const Track = styled.div`
  overflow-y: auto;
  max-height: 100%;
  padding: 60px 0;
  border-radius: 9px;
`;

export default PhotoPopupContainer;