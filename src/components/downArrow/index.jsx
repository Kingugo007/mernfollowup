import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ArrowContainer = styled.div`
width: 45px;
height: 46px;
border-radius: 50%;
background-color: rgba(113, 113, 113, 0.48);
display: flex;
justify-content: center;
align-items: center;
margin-top: 4em;
border: 2px solid transparent;
transition: all 250ms ease-in-out;
cursor: pointer;


&:hover{
    border: 2px solid #fff;
}
`
const ArrowIcon = styled.div`
color: #fff;
font-size: 25px; 
`
export const DownArrow = (props) => {
return (
   <ArrowContainer>
       <ArrowIcon>
           <FontAwesomeIcon icon={faAngleDown} />
       </ArrowIcon>
   </ArrowContainer>

)
}