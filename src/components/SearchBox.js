import styled from "styled-components"
import { DebounceInput } from "react-debounce-input"
import { useState } from "react"
import { useEffect } from "react"
import { fontColor, gray } from "../assets/color"
import { searchProducts } from "../services/productsApi"
import OutsideClickHandler from "./OutsideClickHandler"

export default function Search() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])
  const [openSearch, setOpenSearch] = useState(false)

  useEffect(() => {
    setProducts([])
    if (search.length > 0) {
      searchProducts(search)
        .then((res) => {
          console.log(res)
          setProducts(res)
        })
        .catch((err) => console.log(err))
    }
  }, [search])
  return (
    <Container onClick={() => setOpenSearch(true)}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenSearch(false)
        }}
      >
        <SearchBox
          type="text"
          placeholder="Busque aqui"
          minLength={1}
          autoComplete="false"
          debounceTimeout={500}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {openSearch && search && (
          <ProductsSearchDiv>
            {products.length > 1 ? (
              products.map((prod) => (
                <ProductBox key={prod.id}>
                  <img src={prod.image} alt={prod.name} />
                  <h1>{prod.name}</h1>
                </ProductBox>
              ))
            ) : (
              <ProductNotFoun>Nenhum produto encontrado</ProductNotFoun>
            )}
          </ProductsSearchDiv>
        )}
      </OutsideClickHandler>
    </Container>
  )
}

const Container = styled.div`
  width: 35%;
  height: 50%;
  font-size: 10px;
  color: ${fontColor};
`

const SearchBox = styled(DebounceInput)`
  width: 100%;
  height: 100%;
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
const ProductsSearchDiv = styled.div`
  background-color: white;
  width: 35%;
  min-height: 100px;
  max-height: 500px;
  overflow-y: auto;
  position: absolute;
  z-index: 9999;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid ${gray};
`
const ProductBox = styled.div`
  cursor: pointer;
  height: 100px;
  border-bottom: 1px solid ${gray};
  padding: 10px;
  display: flex;
  align-items: center;
  img {
    width: 80px;
  }
  h1 {
    font-size: 15px;
    margin-left: 10px;
  }
  :hover {
    background-color: ${gray};
  }
`
const ProductNotFoun = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`
