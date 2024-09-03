import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
              year={"June 2024 - Present"}
              title={"Propital"}
              subTitle={"Software Development Engineer"}
              text={
                "Develop and maintain scalable software solutions for a leading real estate investment company. Collaborate with cross-functional teams to design, implement, and optimize applications that enhance investment management and property administration processes."
              }
            />
          <ResumeItem
              year={"December 2022 - June 2024"}
              title={"NewBitCrew"}
              subTitle={"Software Developer"}
              text={
                "Develop and implement innovative software solutions for diverse industries, including fintech. Collaborate with a skilled team to design, code, and optimize web and mobile applications using agile methodologies. Contribute to projects that enhance client operations and deliver exceptional user experiences"
              }
            />
          <ResumeItem
            year={"2021"}
            title={"AmadeuS (Academic)"}
            subTitle={"Software Developer"}
            text={
              "Creation of an E-Commerce to buy/sell musical instruments. Developed with agile methodology, with one-week sprints and presentations to a Product Owner belonging to the staff."
            }
          />
          <ResumeItem
            year={"2016 - Present"}
            title={"1st Violin and Soloist"}
            subTitle={'"Leopoldo Marechal" Chamber Orchestra'}
            text={
              "Member of the orchestra, performing in the first violins and occasionally as a soloist. Experienced at learning music quickly, counting rests accurately and leading the rest of the string section by my playing and bow gestures."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Education"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021"}
            title={"Henry Bootcamp"}
            subTitle={"Software Developer"}
            text={
              "+800 hours intensive bootcamp based on practices and real projects with agile methodologies and tools (scrum). On the other hand, it is aimed at improving technical skills and soft skills working as a team."
            }
          />
          <ResumeItem
            year={"2016 - 2018"}
            title={"National University of La Matanza"}
            subTitle={"Computer Engineering"}
            text={
              ""
            }
          />
          <ResumeItem
            year={"2014 - Present"}
            title={'Escuela de Arte "Leopoldo Marechal"'}
            subTitle={"Instrument Technicature (Violin)"}
            text={
              "Perform as a soloist in symphony orchestras, chamber orchestras and ensembles. Direct, coordinate or participate in research teams in the technical, interpretive and methodology area of teaching the instrument. Program and select the repertoire for instrumental concerts in its various genres and styles."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
