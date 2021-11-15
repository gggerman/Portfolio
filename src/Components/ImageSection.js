import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Germán García</span></h4>
                <p className="paragraph">
                    Hi! My name is Germán, I'm a 𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 oriented 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 and a 𝐕𝐢𝐨𝐥𝐢𝐧𝐢𝐬𝐭. I finished the Henry bootcamp with +800 hours of practice and now I'm actually looking for new challenges. I created this portfolio to show my information and the projects that i've been working on. Feel free to contact me!
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Languages </p>
                    </div>
                    <div className="info">
                        <p>: Germán García</p>
                        <p>: 23</p>
                        <p>: Buenos Aires, Argentina </p>
                        <p>: Spanish (Native), English (Proficient: C2)</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1AwtQv3JmITkbXlwY9mYtdyhci9bRvOQW/view?usp=sharing" target="_blank"><PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
