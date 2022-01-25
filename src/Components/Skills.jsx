import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';
import Technologies from './Technologies';

function Skills() {
    return (
        <SkillsStyled>

                <Title title={'Technologies'} span={'technologies'} />
                <InnerLayout>
                    <Technologies />
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
