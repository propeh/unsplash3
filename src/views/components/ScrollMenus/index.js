import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {IconChevronLeft, IconChevronRight} from "../../../icons";

const ScrollMenus = ({data = [], renderMenu = () => {}}) => {

    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1);

    const trackRef= useRef();

    const onScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const clientWidth = e.target.clientWidth;
        const scrollWidth = e.target.scrollWidth;
        const maxScroll = scrollWidth - clientWidth;

        setScrollLeft(scrollLeft);
        setMaxScroll(maxScroll)

    }

    const scrollStart = scrollLeft === 0;
    const scrollEnd = scrollLeft === maxScroll;

    const onClickLeft = () => {
        trackRef.current.scrollLeft = Math.max(scrollLeft - 300, 0);
    }

    const onClickRight = () => {
        trackRef.current.scrollLeft = Math.min(scrollLeft + 300, maxScroll);
    }

    return (
        <Container className={cn("ScrollMenus", {scrollStart, scrollEnd})}>
            <Track className={"Track"} onScroll={onScroll} ref={trackRef}>
            {
                data.map((item, index) => (
                    renderMenu(item, index)
                ))
            }
            </Track>

            {
                !scrollStart &&
                <ScrollButton className={'left'}
                              onClick={onClickLeft}
                >
                    <IconChevronLeft/>
                </ScrollButton>
            }

            {
                !scrollEnd &&
                <ScrollButton className={'right'}
                              onClick={onClickRight}
                >
                    <IconChevronRight/>
                </ScrollButton>
            }

        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Track = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  scroll-behavior: smooth;
`;

const ScrollButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 100;
  transform: translateY(-50%);
  cursor:pointer;
  transition: 0.3s;
  
  &:hover {
    svg {
      fill: #111
    }
  }

  &.left {
    left: 0;

    &::before {
      content: '';
      width: 200px;
      height: 56px;
      position: absolute;
      top: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 50;
      background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);
      left: 0;
    }
  }
  &.right {
    right: 0;

    &::after {
      content: '';
      width: 200px;
      height: 56px;
      position: absolute;
      top: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 50;
      background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);
      right: 0;
    }
  }
  
  svg {
    width: 22px;
    height: 22px;
    fill: #767676;
    position: relative;
    z-index: 101;
  }


`;

export default ScrollMenus;