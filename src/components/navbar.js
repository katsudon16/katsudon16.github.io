import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { device, palette, titleLabels, getWindowType } from './const';
import { SosmedIcons } from './svgs/sosmed';
import { HomeSVG, CrossSVG, MenuSVG } from './svgs/navbar';

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
    z-index: 15;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(3, 25, 38, 0.7);
    top: -${navbarHeight};
    transition: top 0.5s;

    &.visible {
        top: 0;
    }

    #linkHome {
        height: ${homeIconSize};
        width: ${homeIconSize};
        margin-left: 50px;
        @media ${device.mobile} {
            margin-left: 10px;
        }
        #iconHome {
            height: 100%;
            width: 100%;
            stroke: ${palette.white};
            &:hover {
                cursor: pointer;
                stroke: ${palette.bgContrast};
            }
        }
    }

    #linkMenu {
        height: ${menuIconSize};
        width: ${menuIconSize};
        margin-right: 50px;
        @media ${device.mobile} {
            margin-right: 10px;
        }
        @media ${device.laptop} {
            display: none;
        }
        #iconMenu {
            stroke: ${palette.white};
            height: 100%;
            width: 100%;
            &:hover {
                cursor: pointer;
                stroke: ${palette.bgContrast};
            }
        }
    }
`

// Right menu (all sections)
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

    div {
        height: ${closeIconSize};
        width: ${closeIconSize};
        margin: 20px;
        float: right;
        position: relative;
        @media ${device.laptop} {
            display: none;
        }
        #iconCross {
            stroke: ${palette.white};
            height: 100%;
            width: 100%;
            &:hover {
                cursor: pointer;
                stroke: ${palette.bgContrast};
            }
        }
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
const SosmedContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
        justify-content: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    @media ${device.mobile} {
        justify-content: left;
        margin-top: 20px;
        margin-left: 20px;
    }

    svg {
        display: inline-block;
        fill: ${palette.white};
        height: 30px;
        width: 30px;
        margin: 0 5px;
        pointer-events: auto;

        &:hover {
            cursor: pointer;
            fill: ${palette.bgContrast};
        }
    }
`
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollPos: window.pageYOffset,
            menuToggled: false,
            visibleNav: false,
            showMenu: getWindowType() === 'laptop',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visibleNav: true });
            window.addEventListener('scroll', this.handleScroll);
        }, this.props.secondWait * 1000);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll = () => {
        const currScrollPos = window.pageYOffset;
        const prevScrollPos = this.state.prevScrollPos;
        this.setState({
            visibleNav: currScrollPos < prevScrollPos || currScrollPos === 0,
            prevScrollPos: currScrollPos,
        });
    }

    handleResize = () => {
        this.setState({
            showMenu: getWindowType() === 'laptop',
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
        const sosmeds = ['facebook', 'linkedin', 'github'];
        const menus = [titleLabels.timeline, titleLabels.publication, titleLabels.contact];
        return (
            <Container className={this.state.visibleNav ? 'visible' : ''}>
                <div
                    id={'linkHome'} aria-label='Home' role='button'
                    tabIndex={0}
                    onClick={() => this.scrollToSection(titleLabels.hero)}
                    onKeyDown={(e) => e.key === 'Enter' && this.scrollToSection(titleLabels.hero)}><HomeSVG /></div>
                <div
                    id={'linkMenu'} aria-label='Show menu' role='button'
                    tabIndex={this.state.showMenu ? -1 : 0}
                    onClick={this.toggleRightMenu}
                    onKeyDown={(e) => e.key === 'Enter' && this.toggleRightMenu()}><MenuSVG /></div>
                <RightMenuContainer className={this.state.menuToggled ? 'visible' : null}>
                    <CloseIconContainer>
                        <div
                            id={'linkCross'} aria-label='Close menu' role='button'
                            tabIndex={this.state.menuToggled ? 0 : -1}
                            onClick={this.toggleRightMenu}
                            onKeyDown={(e) => e.key === 'Enter' && this.toggleRightMenu()}><CrossSVG /></div>
                    </CloseIconContainer>
                    {menus.map((data, i) =>
                        <SectionMenu
                            key={i}
                            tabIndex={this.state.menuToggled || this.state.showMenu ? 0 : -1}
                            onKeyDown={(e) => e.key === 'Enter' && this.scrollToSection(data)}
                            onClick={() => this.scrollToSection(data)}>{data}</SectionMenu>
                    )}
                    <SosmedContainer>
                        {sosmeds.map((sosmed, i) => {
                            const Icon = SosmedIcons[sosmed];
                            return <Icon key={i} tabIndex={this.state.menuToggled || this.state.showMenu ? 0 : -1} />;
                        })}
                    </SosmedContainer>
                </RightMenuContainer>
            </Container>
        );
    }
}

export default NavBar;