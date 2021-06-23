import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import UserProfile from "../User/UserProfile";
import {IconButton} from "../Button/Button.Styled";
import {IconHeart, IconPlus, IconZoomIn, IconZoomOut} from "../../../icons";

const PhotoInfo = ({data}) => {

    const [imageSrc, setImageSrc] = useState(data?.urls?.regular);
    const [zoomIn, setZoomIn] = useState(false);

    const onClick = () => {
        setZoomIn(v => !v)
    }

    return (
        <Container className={cn({zoomIn})}>
            <Head>
                <UserProfile profileImage={data?.user?.profile_image.medium}
                             name={data?.user?.name}
                             username={data?.user?.username}
                             forHire={data?.user?.for_hire}
                />
                <ButtonGroups>
                    <IconButton>
                        <IconHeart/>
                    </IconButton>
                    <IconButton>
                        <IconPlus/>
                    </IconButton>
                </ButtonGroups>
            </Head>
            <Body>
                <Image onClick={onClick}>
                    <img src={zoomIn ? data?.urls?.full : data?.urls?.regular} alt=""/>
                    <ButtonScale className={'btnZoom'}>
                        {
                            zoomIn ?
                                <IconZoomOut/>
                                :
                                <IconZoomIn/>

                        }
                    </ButtonScale>
                </Image>

            </Body>
        </Container>
    )
}

const Container = styled.div`

`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const ButtonGroups = styled.div`
  display: flex;
  align-items: center;

`;

const Body = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: center;

  .zoomIn & {
    padding: 10px 0;
  }
`;

const Image = styled.div`
  max-width: 80%;
  min-height: 70vh;
  position: relative;
  cursor: zoom-in;

  .zoomIn & {
    cursor: zoom-out;
    max-width: 100%;
  }

  .btnZoom {
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    .btnZoom {
      opacity: 1;
    }
  }
`;

const ButtonScale = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;

  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
  }
`;

export default PhotoInfo;