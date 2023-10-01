import React from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1><span>Germán García</span></h1>
                <p>
                    Full Stack Developer
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/german-garcia-full-stack-developer/" target="_blank" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/gggerman" target="_blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=541125389032" target="_blank" className="icon i-whatsapp">
                        <WhatsAppIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-whatsapp{
                &:hover{
                    border: 2px solid green;
                    color: green;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
