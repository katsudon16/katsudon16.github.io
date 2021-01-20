import React from 'react'
import styled from 'styled-components'
import { device, palette } from './const'

const navbarHeight = '50px';
const homeIconSize = '35px';
const menuIconSize = '25px';

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: ${navbarHeight};
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(3, 25, 38, 0.5);
`
const LeftMenu = styled.div`
    height: ${homeIconSize};
    width: ${homeIconSize};
    margin-left: 50px;
    background: url('home.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    &:hover {
        cursor: pointer;
        background: url('home_hover.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media ${device.mobile} {
        margin-left: 10px;
    }
`
const RightMenu = styled.div`
    box-sizing: border-box;
    height: ${navbarHeight};
    padding: 5px;
    display: flex;
    flex-direction: row;
    margin-right: 50px;

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }
`
const RightMenuIcon = styled.div`
    height: ${menuIconSize};
    width: ${menuIconSize};
    margin-right: 50px;
    background: url('menu.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    &:hover {
        cursor: pointer;
        background: url('menu_hover.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media ${device.mobile} {
        margin-right: 10px;
    }

    @media ${device.laptop} {
        display: none;
    }
`

const SectionMenu = styled.div`
    width: 130px;
    box-sizing: border-box;
    color: ${palette.color2};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    &:hover {
        cursor: pointer;
        color: ${palette.bgContrast};
    }
`

const NavBar = () => (
    <Container>
        <LeftMenu />
        <RightMenuIcon />
        <RightMenu>
            <SectionMenu>Timeline</SectionMenu>
            <SectionMenu>Publication</SectionMenu>
            <SectionMenu>Contact</SectionMenu>
        </RightMenu>
    </Container>
);

export default NavBar;