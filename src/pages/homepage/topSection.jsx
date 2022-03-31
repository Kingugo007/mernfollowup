import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/bg2.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Context } from "../../context/Context";

const TopContainer = styled.div` 
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
  width: 80%;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
 
  const { user } = useContext(Context)

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="6em" />
          <Logo />
          <Marginer direction="vertical" margin="2em" />
          <MotivationalText>Best Daily tracking software</MotivationalText>
          <MotivationalText>Don't let your day end without achieving your goals</MotivationalText>
          <Marginer direction="vertical" margin="1em" />
         {!user && <Button><Link to="/register" style={{ color: "white",}}>Save your activities</Link></Button> }
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element> 
  );
}
