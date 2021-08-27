import { Container } from "./styles"
 
const SearchBar = () => {
  return (
    <Container>
      <label htmlFor="">
        <input type="text" placeholder="Search"/>
      </label>
    </Container>
  )
}

export default SearchBar;