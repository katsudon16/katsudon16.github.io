import React, { Component } from 'react';
import styled from 'styled-components';
import { palette } from './const';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: ${palette.bg};
    z-index: 20;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    &.hidden {
        display: none;
    }   
    .loader {
        position: relative;
        width: 100px;
        height: 100px;
        div {
            position: absolute;
            border: 4px solid ${palette.bgContrast};
            opacity: 1;
            border-radius: 50%;
            animation: loader 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;

            &:nth-child(2) {
                animation-delay: -0.75s;
            }
        }
    }
    @keyframes loader {
        0% {
            top: 45px;
            left: 45px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 90px;
            height: 90px;
            opacity: 0;
        }
    }
`
class LoaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = { hidden: false };
    }
    componentDidMount() {
        document.body.style.position = 'fixed';
        setTimeout(() => {
            this.setState({ hidden: true });
            document.body.style.position = '';
        }, this.props.secondWait * 1000)
    }
    render() {
        return (
            <Container className={this.state.hidden ? 'hidden' : ''}>
                <div className='loader'><div></div><div></div></div>
            </Container>
        );
    }
}
export default LoaderPage;