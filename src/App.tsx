// import { useState } from 'react'
import { HeaderBar, Title, Tabs, SearchIcon, LanguageToggle, HeaderContainer } from './components/styles';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";




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

      <LanguageToggle>
        English
        <TiArrowSortedDown size = {30} color = "black" />
      </LanguageToggle>
      </>
    
  )
}

export default App
