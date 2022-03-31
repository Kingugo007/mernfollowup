import styled from "styled-components";

const ServicesContainer = styled.div`
display: flex;
align-items: center;
flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
flex-wrap: wrap-reverse;

@media screen and (max-width: 480px) {
justify-content: center;
}
`

const ServiceImg = styled.img`
width: 30em;
height: 20em;

@media screen and (max-width: 480px) {
    width: 16em;
    height: 12em;
}
`
const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 60%;

@media screen and (max-width: 480px){
    max-width: 100%;
}
`
const Title = styled.h2`
color: #4154F1;
font-size: 26px;
font-weight: 700;
text-transform: uppercase;
text-align: center;

@media screen and (max-width: 480px) {
    margin-top: 1em;
}
`
const Details = styled.p`
color: black;
font-size: 14px;
text-align: center;
max-width: 70%;

@media screen and (max-width: 480px) {
    width: 100%;
}
`

export const OurService = (props) => {

const { title, description, imgUrl, isReversed} = props

return (
    <ServicesContainer isReversed={isReversed}>
        <DescriptionContainer>
            <Title>{title} </Title>
            <Details>{description}</Details>
        </DescriptionContainer> 
        <ServiceImg src={imgUrl} />
    </ServicesContainer>
)
}