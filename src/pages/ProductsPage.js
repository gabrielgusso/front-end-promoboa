import styled from "styled-components"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"

export default function ProductPage() {
  return (
    <Container>
      <Header />
      <ContainerWidth>
        <ProductCard></ProductCard>
      </ContainerWidth>
    </Container>
  )
}

const Container = styled.div`
  background-color: #e5e4e2;
  width: 100%;
  height: 100vh;
`
const ContainerWidth = styled.div`
  width: 1300px;
  border: 1px solid black;
  height: 93vh;
  margin: auto;
  padding: 50px;
`
