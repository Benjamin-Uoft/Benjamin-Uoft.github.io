import SearchComponent from './components/SearchComponent';
import { TiArrowSortedDown } from "react-icons/ti";
import { Outlet } from 'react-router-dom';
import {  useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

function App() {
  const [isClicked, setIsClicked] = useState(false); // State to track click

  const searchRef = useRef<HTMLDivElement>(null); // Ref for the search bar

  // Add a global click listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsClicked(false); // Close the search bar if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    
      <>
      <HeaderContainer>
        <HeaderBar>
          <Title to = '/'>Family tree</Title>
          <Tabs to='/about'>About</Tabs>
          <Tabs to = '/request-edit'>Request an edit</Tabs>
        </HeaderBar>

        <div ref={searchRef}>
          <SearchComponent
            isFocused={isClicked}
            onClick={() => setIsClicked(!isClicked)}
          />
        </div>
          
      </HeaderContainer>
      <Outlet />
      
      <LanguageToggle>
        English
        <TiArrowSortedDown size = {30} color = "black" />
      </LanguageToggle>
      </>
    
  )
  
}

export default App

// STYLES


const HeaderContainer = styled.header`
  background:transparent;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  z-index: 1;
`

const HeaderBar = styled.nav`
  background: grey;
  border-radius: 20px;
  padding: 5px 20px 5px 40px;
  display: flex;  
  align-items: center;
  gap: 30px;
`;

const Title = styled(NavLink)`
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

const Tabs = styled(NavLink)`
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



  const LanguageToggle = styled.button`
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