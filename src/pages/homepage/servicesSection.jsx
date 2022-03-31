import { Element } from "react-scroll"
import styled from "styled-components"
import { OurService } from "../../components/ourService"
import { SectionTitle } from "../../components/sectiontitle"

import shopImg from "../../assets/pictures/shop.png"
import phoneImg from "../../assets/pictures/phone.png"
import { Marginer } from "../../components/marginer"

const ServicesContainer = styled(Element)`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px 0;
`

const Margin = styled.div`
margin: 1em;
`

export const ServicesSection = (props) => {
return (
  <ServicesContainer name="servicesSection">
    <Marginer direction="vertical" margin="2em" />
    <SectionTitle>Best Quality software</SectionTitle>
    <Margin />
    <OurService
     title="How to use follow up"
     description="Create a todos lists for the today, keep track of your daily records"
     imgUrl={phoneImg}
      />
      <OurService
     title="Let follow up save your memories"
     description="follow up is the best software to help you keep track of your business and daily activities. Record business transcations and daliy business activities"
     imgUrl={shopImg}
     isReversed
      />
      <Marginer direction="vertical" margin="2em" />
  </ServicesContainer>

)
}