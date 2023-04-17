import styled from "styled-components"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import { getProducts } from "../services/productsApi"

export default function ProductPage() {
  const [products, setProducts] = useState()

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Container
      onOutsideClick={() => {
        console.log("clicked outside!")
      }}
    >
      <Header />
      <ContainerWidth>
        {products &&
          products.map((prod) => <ProductCard key={prod.id} product={prod} />)}
      </ContainerWidth>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
`
const ContainerWidth = styled.div`
  width: 1300px;
  height: 93vh;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
