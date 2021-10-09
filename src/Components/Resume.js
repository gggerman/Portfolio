import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2021'}
                        title={'AmadeuS'}
                        subTitle={'Full Stack Developer'}
                        text={'Creation of an E-Commerce to buy/sell musical instruments. Developed with agile methodology, with one-week sprints and presentations to a Product Owner belonging to the staff.'}
                    />
                    <ResumeItem
                        year={'2021'}
                        title={'PokeApp'}
                        subTitle={'Full Stack Developer'}
                        text={'Development of a SPA (Single-Page Application) using React for the Front End and Redux as stage management. The components were developed with CSS without the use of external libraries. It consumes data from an API through a Back End developed in NodeJs using Express, adding new functionalities to the original API.'}
                    />
                    <ResumeItem
                        year={'2016 - Present'}
                        title={'1st Violin and Soloist'}
                        subTitle={'"Leopoldo Marechal" Chamber Orchestra'}
                        text={'Member of the orchestra, performing in the first violins and occasionally as a soloist. Experienced at learning music quickly, counting rests accurately and leading the rest of the string section by my playing and bow gestures.'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2021'}
                        title={'Henry Bootcamp'}
                        subTitle={'Full Stack Developer'}
                        text={'+700 hours intensive bootcamp based on practices and real projects with agile methodologies and tools (scrum). On the other hand, it is aimed at improving technical skills and soft skills working as a team.'}
                    />
                    <ResumeItem
                        year={'2014 - Present'}
                        title={'Escuela de Arte "Leopoldo Marechal"'}
                        subTitle={'Instrument Technicature (Violin)'}
                        text={'Perform as a soloist in symphony orchestras, chamber orchestras and ensembles. Direct, coordinate or participate in research teams in the technical, interpretive and methodology area of teaching the instrument. Program and select the repertoire for instrumental concerts in its various genres and styles.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
