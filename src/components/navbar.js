import React from 'react'
import styled from 'styled-components'
import { palette } from './const'

const navbarHeight = '50px';

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: ${navbarHeight};
    z-index: 20;
    display: flex;
    justify-content: space-between;
    background-color: rgba(3, 25, 38, 0.5);
`
const LeftMenu = styled.div`
    height: ${navbarHeight};
    width: 50px;
`
const RightMenu = styled.div`
    box-sizing: border-box;
    height: ${navbarHeight};
    padding: 5px;
    display: flex;
    flex-direction: row;
    margin-right: 10px;
`
const SectionMenu = styled.div`
    width: 150px;
    box-sizing: border-box;
    color: ${palette.color2};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    &:hover {
        cursor: pointer;
        color: ${palette.bgContrast};
    }
`

const NavBar = () => (
    <Container>
        <LeftMenu />
        <RightMenu>
            <SectionMenu>Timeline</SectionMenu>
            <SectionMenu>Publication</SectionMenu>
            <SectionMenu>Contact</SectionMenu>
        </RightMenu>
    </Container>
);

export default NavBar;