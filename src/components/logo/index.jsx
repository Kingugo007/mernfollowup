import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import followLogo from "../../assets/logo/f.png"

const LogoContainer = styled.div`
display: flex;
flex-direction: ${({ inline }) => inline ? "row" : "column"};
align-items: ${({ inline }) => inline && "center"} ;
align-items: center;
`

const LogoImg = styled.img`
width: 8em;
height: 8em;

${({ inline }) => inline && css`
 width: 28px;
 height: 28px;
 margin-right: 6px;
`} 

${({ small }) => small && css`
 width: 5em;
 height: 5em;
`} 
`
const LogoText = styled.div`
margin-top: ${({ inline }) => (inline ? 0 : "6px")};
font-size: ${({ inline, small }) => inline ? "16px" : small ? "22px" : "40px"};
color: ${({ inline }) => inline ? '#4154f1' : '#4154f1'};
font-weight: ${({ inline }) => inline ? 500 : 700};
font-family: 'Poppins', 'Sans-serif';
text-transform: uppercase;
` 

export const Logo = (props) => {
const { inline, small } = props

return (
    <LogoContainer inline={inline} small={small}>
       <Link to="/"> <LogoImg img src={followLogo} alt="follow up" small={small} inline={inline} /></Link>
       <LogoText inline={inline} small={small}>follow up</LogoText>
    </LogoContainer>
    
)

}