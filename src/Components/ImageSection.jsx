import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpeg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Germán García</span>
        </h4>
        <p className="paragraph">
          Hi! My name is Germán, and I'm a Software Developer and Violinist. I have two years of experience working with React and Node, and I'm currently part of the team at Propital. My primary stack is React and Node, but I also have experience with PHP, Golang and Python. I created this portfolio to showcase my work and the projects I've been involved in. Feel free to reach out to me!
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name:</p>
            <p>Age:</p>
            <p>Location:</p>
            <p>Languages:</p>
          </div>
          <div className="info">
            <p>Germán García</p>
            <p>26</p>
            <p>Buenos Aires, Argentina </p>
            <p>Spanish (Native), English (Proficient: C2)</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1jeHSaAWK5A3e9846IdNRsxGDUrPddvwl/view?usp=sharing"
          target="_blank" rel="noreferrer"
        >
          <PrimaryButton title={"CV"} />
        </a>
        <a
          href="https://drive.google.com/file/d/1VmaHcIRa44bs-T0owL4G4SJmL6_H0B4w/view?usp=sharing"
          target="_blank" rel="noreferrer"
        >
          <PrimaryButton title={"English Certification (EFSET)"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
