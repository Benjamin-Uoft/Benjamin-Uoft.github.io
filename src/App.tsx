// import { useState } from 'react'
import { HeaderBar, Title, Tabs, SearchIcon, LanguageToggle, HeaderContainer, TreeContainer } from './components/styles';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import Tree from 'react-d3-tree';

const treeData = [
  {
    name: 'Parent',
    children: [
      {
        name: 'Child 1',
      },
      {
        name: 'Child 2',
        children: [
          {
            name: 'Grandchild 1',
          },
          {
            name: 'Grandchild 2',
          },
        ],
      },
    ],
  },
];


function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <>
      <HeaderContainer>
        <HeaderBar>
          <Title>Family tree</Title>
          <Tabs>About</Tabs>
          <Tabs>Request an edit</Tabs>

        </HeaderBar>
        <SearchIcon>
          <FaSearch size={35} color="white" />
        </SearchIcon>
      </HeaderContainer>
      
      <TreeContainer>
        <Tree data={treeData} />
      </TreeContainer>
      <LanguageToggle>
        English
        <TiArrowSortedDown size = {30} color = "black" />
      </LanguageToggle>
      </>
    
  )
}

export default App
