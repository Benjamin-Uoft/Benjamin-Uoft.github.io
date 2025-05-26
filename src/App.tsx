// import { useState } from 'react'
import { HeaderBar, Title, Tabs, SearchIcon, LanguageToggle, HeaderContainer, TreeContainer } from './components/styles';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
// import { ReactFlow } from '@xyflow/react';
 
// import '@xyflow/react/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function App() {

  return (
    
      <>
      <HeaderContainer>
        <HeaderBar>
          <Title to = '/'>Family tree</Title>
          <Tabs to='/about'>About</Tabs>
          <Tabs to = '/request-edit'>Request an edit</Tabs>

        </HeaderBar>
        <SearchIcon>
          <FaSearch size={35} color="white" />
        </SearchIcon>
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
