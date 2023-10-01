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
        Hi! My name is Germán, I'm a Full Stack Developer and a Violinist. I completed the Henry bootcamp with over 800 hours of practice and have nearly a year of experience working with React and Node at NewBitCrew. I created this portfolio to showcase my information and the projects I've been working on. Please feel free to contact me!
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
            <p>: 25</p>
            <p>: Buenos Aires, Argentina </p>
            <p>: Spanish (Native), English (Proficient: C2)</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1cltIcrR9FsuYwHICZPeEZXk3de5zW99e/view?usp=sharing"
          target="_blank"
        >
          <PrimaryButton title={"Download CV"} />
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
