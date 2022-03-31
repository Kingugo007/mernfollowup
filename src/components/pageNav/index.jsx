import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex; 
  align-items: center;
  justify-content: space-between;
 `;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-family: 'Poppins', sans-serif;
 
  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export const PageNav = (props) => {
const { user } = useContext(Context)
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        {!user && <Button small><Link to="/register" >Get started</Link></Button>}
        {user && <Button small><Link to="/dashboard" style={{ color: "white",}}> {`${user.username.substr(0,2)} Records`} </Link></Button>}
        <Marginer direction="horizontal" margin="8px" />
        {!user && <LoginButton small><Link to="/login" style={{ color: "#4154f1",}}>Login</Link></LoginButton>}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
