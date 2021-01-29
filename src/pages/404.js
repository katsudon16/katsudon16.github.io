import React, { Component } from 'react';
import { palette } from '../components/const';
import styled from 'styled-components';
import { HomeSVG } from '../components/svgs/navbar';
import '../styles/global.scss';

const Container = styled.div`
    min-width: 320px;
    width: 100%;
    height: 100vh;
    background-color: ${palette.bg};
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    width: 80vh;
    text-align: center;

    .mainTitle {
        position: relative;
        height: 300px;
        
        h1 {
            top: -60px;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 120px;
            margin: 0;
            color: ${palette.white};
            font-family: Allura;
            position: absolute;
            opacity: 0;
            transition: opacity 1s, top 1s;
            
            &.visible {
                top: 0;
                opacity: 1;
            }
    
        }
    }

    h3 {
        opacity: 0;
        font-size: 30px;
        color: ${palette.bgContrast};
        transition: opacity 1s;

        &.visible {
            opacity: 1;
        }
    }
    a {
        opacity: 0;
        transition: opacity 1s;
        &.visible {
            opacity: 1;
        }
        #iconHome {
            height: 100px;
            width: 100px;
            stroke: ${palette.white};

            &.visible {
                opacity: 1;
            }
            &:hover {
                cursor: pointer;
                stroke: ${palette.bgContrast};
            }
        }
    }
`
class NotFoundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainTitleVisible: false,
            titleVisible: false,
            homeVisible: false,
        };
    }
    componentDidMount() {
        const timeout = {
            mainTitleVisible: 200,
            titleVisible: 300,
            homeVisible: 500,
        };
        for (let key in timeout) {
            setTimeout(() => {
                this.setState({ [key]: true });
            }, timeout[key]);
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <div className='mainTitle'>
                        <h1 className={this.state.mainTitleVisible ? 'visible' : ''}>
                            Oops,<br />page not found!
                        </h1>
                    </div>
                    <h3 className={this.state.titleVisible ? 'visible' : ''}>Go back to the home page?</h3>
                    <a href='/' aria-label='Go back to home page' className={this.state.homeVisible ? 'visible' : ''}>
                        <HomeSVG />
                    </a>
                </Content>
            </Container>
        );
    }
}

export default NotFoundPage;
