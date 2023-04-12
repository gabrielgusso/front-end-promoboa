import styled from "styled-components"
import { DebounceInput } from "react-debounce-input"

export default function Search() {
  return (
    <>
    <SearchBox
      type="text"
      placeholder="Busque aqui"
      minLength={3}
      autoComplete="false"
      debounceTimeout={300}
      // value={busca}
      // onChange={(event) => setBusca(event.target.value)}
    />
    </>
  )
}

const SearchBox = styled(DebounceInput)`
  width: 35%;
  height: 50%;
  background: #ffffff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  border: 1px solid #d3d3d3;
  &:focus-visible {
    outline: none;
  }
  ::placeholder {
    opacity: 0.5;
    padding-left: 10px;
  }
`
