import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  background:transparent;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`

export const TreeContainer = styled.div`
  height: 100%;
  width: 100%;
  position:absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

`;

export const HeaderBar = styled.nav`
  background: grey;
  border-radius: 20px;
  padding: 5px 20px 5px 40px;
  display: flex;  
  align-items: center;
  gap: 30px;
`;

export const Title = styled(NavLink)`
  color: white;
  font-size: 2.8rem;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  white-space: nowrap;
  transition-duration: 0.4s;
  text-decoration: none;

  &:hover {
  color:darkviolet;
  cursor:pointer;}
`;

export const Tabs = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  transition-duration: 0.4s;
  text-decoration: none;

  &.active {
  color: darkviolet;
  background:rgb(147, 147, 147);
  border-radius: 20px;
  padding:10px;
}

  &:hover {
  color:darkviolet;
  background:rgb(147, 147, 147);
  border-radius: 20px;
  padding:10px;
  cursor:pointer;}
`;

export const SearchIcon = styled.button`
  color: grey;
  size: 40px;
  background: grey;
  border-radius: 60px;
  padding: 10px;
  margin-left: 10px;
  border: none;
  transition-duration: 0.4s;

  &:hover {
    background: darkviolet;}
  `

  export const LanguageToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  transition-duration: 0.4s;
  &:hover {
  background: lightgrey;
  border-radius: 20px;
  padding:10px;}
  `

