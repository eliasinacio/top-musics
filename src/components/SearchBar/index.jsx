import { Container } from "./styles"

// não implementei a busca...

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