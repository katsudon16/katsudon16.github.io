import React from 'react'
import styled, { css } from 'styled-components'
import SectionContainer from '../section'
import ProfilePhoto from '../profilephoto'
import ParagraphBox from '../paragraph'

const Hero = () => (
    <SectionContainer>
        <ProfilePhoto />
        <ParagraphBox>
            Test. Test. Test. Test. Test. Test.
        </ParagraphBox>
    </SectionContainer>
);

export default Hero;