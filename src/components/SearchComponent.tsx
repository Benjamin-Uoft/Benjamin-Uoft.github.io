import { FaSearch } from "react-icons/fa";
import styled  from "styled-components";


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

function SearchComponent({isFocused, onClick}: {isFocused: boolean, onClick: () => void}) {
    if (isFocused) {
        return (
            <div>
                <input type="text" placeholder="Search..." />
            </div>
        )
    }
    else{
        return (
        <div>
          <SearchIcon onClick={onClick}> 
            <FaSearch size={35} color="white" />
          </SearchIcon>
        </div>
      )
    }
  
}

export default SearchComponent;