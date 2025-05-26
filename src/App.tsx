// import { useState } from 'react'
import { HeaderBar, Title, Tabs, SearchIcon, LanguageToggle, HeaderContainer, TreeContainer } from './components/styles';
import Search from './components/Search';
import { TiArrowSortedDown } from "react-icons/ti";
import { Outlet } from 'react-router-dom';
import {  useEffect, useRef, useState } from 'react';
// import { ReactFlow } from '@xyflow/react';
 
// import '@xyflow/react/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];



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
          <Search
            isFocused={isClicked}
            onClick={() => setIsClicked(!isClicked)}
          />
        </div>
          
      </HeaderContainer>
      <Outlet />
      {/* <TreeContainer>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </TreeContainer> */}
      <LanguageToggle>
        English
        <TiArrowSortedDown size = {30} color = "black" />
      </LanguageToggle>

      
      </>
    
  )
}

export default App
