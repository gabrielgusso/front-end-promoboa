import styled from "styled-components"
import Header from "../components/Header"
import { fontColor, gray, yellow } from "../assets/color"
import CurrencyInput from "react-currency-masked-input"
import { useState } from "react"
import { postProducts } from "../services/productsApi"
import { useNavigate } from "react-router-dom"

export default function AddOffer() {
  const [imgUrl, setImgUrl] = useState("")
  const navigate = useNavigate()

  async function submitInfos(e) {
    e.preventDefault()

    const body = {
      name: e.target.name.value,
      normalPrice: transformInNumber(e.target.normalPrice.value),
      discountPrice: transformInNumber(e.target.discountPrice.value),
      coupon: e.target.coupon.value,
      description: e.target.description.value,
      image: e.target.imageUrl.value,
      url: e.target.url.value,
      store: e.target.store.value,
    }
    try {
      const token = localStorage.getItem("Bearer")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      postProducts(config, body)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  function transformInNumber(string) {
    const result = string.replace(".", "")
    return Number(result)
  }

  return (
    <Container>
      <Header />
      <CentralBox>
        <Title>Encontrou uma nova oferta?</Title>
        <Form onSubmit={submitInfos}>
          <InputName>
            <h1>Link da oferta</h1>
          </InputName>

          <UrlInput
            name="url"
            placeholder="https://site.com.br/oferta"
            type="text"
            required
          />
          <InputsDiv>
            <LeftDiv>
              <InputName>
                <h1>Título da oferta</h1>
              </InputName>
              <input
                name="name"
                placeholder="Ex: Teclado Gamer XXXX"
                type="text"
                required
              />
              <Prices>
                <PriceDiv>
                  <InputName>
                    <h1>Preço normal</h1>
                  </InputName>
                  <PriceInput
                    name="normalPrice"
                    placeholder="00,00"
                    type="number"
                    required
                  />
                </PriceDiv>
                <PriceDiv>
                  <InputName>
                    <h1>Preço com desconto</h1>
                  </InputName>
                  <PriceInput
                    name="discountPrice"
                    placeholder="00,00"
                    type="number"
                    required
                  />
                </PriceDiv>
              </Prices>
              <Prices>
                <PriceDiv>
                  <InputName>
                    <h1>Nome da loja</h1>
                  </InputName>
                  <input
                    name="store"
                    placeholder="Ex: Aliexpress"
                    type="text"
                  />
                </PriceDiv>
                <PriceDiv>
                  <InputName>
                    <h1>Cupom (Opcional)</h1>
                  </InputName>
                  <input name="coupon" placeholder="cupom" type="text" />
                </PriceDiv>
              </Prices>
              <InputName>
                <h1>Descrição (Opcional)</h1>
              </InputName>
              <input name="description" placeholder="" type="text" />
            </LeftDiv>
            <RigthDiv>
              <InputName>
                <h1>Url da imagem do produto</h1>
              </InputName>
              <input
                name="imageUrl"
                placeholder=""
                type="text"
                required
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <ImageBox>
                <img src={imgUrl} />
              </ImageBox>
            </RigthDiv>
          </InputsDiv>
          <ButtonSubmit type="submit">Enviar Oferta</ButtonSubmit>
        </Form>
      </CentralBox>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`
const CentralBox = styled.div`
  width: 1300px;
  height: 850px;
  background-color: white;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
`
const Title = styled.div`
  width: 100%;
  background-color: ${yellow};
  height: 90px;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  border-radius: 5px;
`

const Form = styled.form`
  background-color: ${gray};
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  height: 85%;
  padding: 20px;
  border-radius: 5px;
  input[type="text"] {
    font-size: 15px;
    padding-left: 10px;
  }
`
const UrlInput = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 40px;
  border: 1px solid ${gray};
`

const InputName = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
const InputsDiv = styled.div`
  width: 100%;
  height: 480px;
  margin-top: 40px;
  display: flex;
`

const LeftDiv = styled.div`
  width: 60%;
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    border-radius: 5px;
    height: 40px;
    border: 1px solid ${gray};
    margin-bottom: 50px;
  }
`

const Prices = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const PriceDiv = styled.div`
  width: 45%;
`

const PriceInput = styled(CurrencyInput)`
  padding-left: 10px;
  color: ${fontColor};
`

const RigthDiv = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 20px;
  input {
    width: 100%;
    border-radius: 5px;
    height: 40px;
    border: 1px solid ${gray};
    margin-bottom: 30px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageBox = styled.div`
  img {
    width: 300px;
  }
`
const ButtonSubmit = styled.button`
  width: 150px;
  height: 60px;
  background-color: ${yellow};
  border: none;
  font-size: 20px;
  border-radius: 5px;
`
