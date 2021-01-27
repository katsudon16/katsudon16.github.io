import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels } from './const'

const navbarHeight = '50px';
const homeIconSize = '35px';
const menuIconSize = '25px';
const closeIconSize = '20px';
const sectionMenuWidth = '180px';
const sectionMenuContainerWidth = '240px'; // tablet/mobile only

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: ${navbarHeight};
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(3, 25, 38, 0.7);
    top: -${navbarHeight};
    transition: top 0.5s;

    &.visible {
        top: 0;
    }
`
// Left menu (Home)
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
// Right menu (all sections)
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
const RightMenuMobileTablet = css`
    flex-direction: column;
    background-color: rgb(3, 25, 38);
    position: fixed;
    width: ${sectionMenuContainerWidth};
    height: 100vh;
    top: 0;
    right: -${sectionMenuContainerWidth};
    margin-right: 0;
    transition: right 0.4s;

    &.visible {
        right: 0;
    }
`
const RightMenuContainer = styled.div`
    box-sizing: border-box;
    height: ${navbarHeight};
    display: flex;
    flex-direction: row;
    margin-right: 50px;
    overflow: hidden;

    @media ${device.mobile} {
        ${RightMenuMobileTablet}
    }

    @media ${device.tablet} {
        ${RightMenuMobileTablet}
    }
`
const CloseIconContainer = styled.div`
    width: ${sectionMenuContainerWidth};
    box-sizing: border-box;
`
const CloseIcon = styled.div`
    height: ${closeIconSize};
    width: ${closeIconSize};
    margin: 20px;
    float: right;
    position: relative;
    background: url('close.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    &:hover {
        cursor: pointer;
        background: url('close_hover.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media ${device.laptop} {
        display: none;
    }
`
const SectionMenuMobileTablet = css`
    display: block;
    padding: 20px;
    width: 100%;
`
const SectionMenu = styled.a`
    width: ${sectionMenuWidth};
    box-sizing: border-box;
    color: ${palette.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: ${palette.bgContrast};
    }

    @media ${device.mobile} {
        ${SectionMenuMobileTablet}
    }

    @media ${device.tablet} {
        ${SectionMenuMobileTablet}
    }
`

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollPos: window.pageYOffset,
            menuToggled: false,
            visible: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {
            this.scrollToSection(titleLabels.hero, 'auto');
        }, 500);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const currScrollPos = window.pageYOffset;
        const prevScrollPos = this.state.prevScrollPos;
        this.setState({
            visible: currScrollPos < prevScrollPos || currScrollPos === 0,
            prevScrollPos: currScrollPos,
        });
    }

    toggleRightMenu = () => {
        this.setState({ menuToggled: !this.state.menuToggled });
    }

    scrollToSection = (label, behavior='smooth') => {
        this.setState({ menuToggled: false });
        document.getElementById(label).scrollIntoView({ behavior });
    }

    render() {
        return (
            <Container className={this.state.visible ? 'visible' : ''}>
                <LeftMenu onClick={() => this.scrollToSection(titleLabels.hero)} />
                <RightMenuIcon onClick={this.toggleRightMenu} />
                <RightMenuContainer className={this.state.menuToggled ? 'visible' : null}>
                    <CloseIconContainer>
                        <CloseIcon onClick={this.toggleRightMenu} />
                    </CloseIconContainer>
                    <SectionMenu onClick={() => this.scrollToSection(titleLabels.timeline)}>{titleLabels.timeline}</SectionMenu>
                    <SectionMenu onClick={() => this.scrollToSection(titleLabels.publication)}>{titleLabels.publication}</SectionMenu>
                    <SectionMenu onClick={() => this.scrollToSection(titleLabels.contact)}>{titleLabels.contact}</SectionMenu>
                </RightMenuContainer>
            </Container>
        );
    }
}

export default NavBar;