import styled from "styled-components"
import { darkYellow, fontColor, gray, yellow } from "../assets/color"
import moment from "moment-timezone"
import "moment/locale/pt-br"
import { BiLike } from "react-icons/bi"
import { GoCommentDiscussion } from "react-icons/go"

export default function ProductCard() {
  const productMock = {
    userName: "Joao",
    name: "Teclado Mecânico Gamer HyperX Alloy MKW100",
    url: "https://www.kabum.com.br/produto/371586/teclado-mecanico-gamer-hyperx-alloy-mkw100-rgb-switch-red-full-size-layout-us-4p5e1aa-aba?gclid=Cj0KCQjw27mhBhC9ARIsAIFsETEFcZYwp5bxp8o14IoWt_XkVkAhhC0pHxmN410XxwwaPf6qneyZK2IaAhX_EALw_wcB",
    image:
      "https://i.promobit.com.br/268/jogo_pc_devil_may_cry_4_special__edition.jpg",
    description: "Teclado de luzinha sla ta barato",
    store: "Kabum",
    coupon: "",
    normalPrice: 35090,
    discountPrice: 29900,
    createdAt: "2023-03-22T16:13:39.982Z",
  }
  function formatPrice(price) {
    const realPrice = price / 100
    return realPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  function formatData(data) {
    moment.locale("pt-br")
    return moment.tz(data, "America/Sao_Paulo").fromNow()
  }

  return (
    <Container>
      <ImageDiv>
        <img src={productMock.image} alt={productMock.name} />
      </ImageDiv>
      <BlackLine />
      <Padding>
        <PriceDiv>
          <h1>
            <del>{formatPrice(productMock.normalPrice)}</del>
          </h1>
          <h2>{formatPrice(productMock.discountPrice)}</h2>
        </PriceDiv>
        <h3>{productMock.name.substring(0, 44)}</h3>
        <BottonInfosBox>         
            <StoreName>
              <p>{productMock.store}</p>
              <CommentDiv><Comment/> <h1>99+</h1></CommentDiv>
            </StoreName>
            <DateAndlikeDiv>
            <Date>{formatData(productMock.createdAt)}</Date>
            <LikeButton><LikeIcon/> <h1>99+</h1></LikeButton>
          </DateAndlikeDiv>
        </BottonInfosBox>
      </Padding>

      <Button>Ver Oferta</Button>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  width: 230px;
  height: 460px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
  h3 {
    color: ${fontColor};
    margin-top: 15%;
    line-height: 25px;
  }
`
const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 0 20px;
`

const BlackLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${gray};
`

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
`
const PriceDiv = styled.div`
  h1 {
    color: ${fontColor};
  }
  h2 {
    margin-top: 6px;
    font-size: 20px;
    color: ${darkYellow};
  }
`

const Date = styled.div`
  color: gray;
  font-size: 12px;
  padding-top: 4px;
`

const Button = styled.button`
  width: 100%;
  height: 9%;
  border: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  bottom: 0;
  background-color: ${yellow};
  font-weight: 700;
  font-size: 15px;
  color: white;
  cursor: pointer;
  :hover {
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.04);
  }
`

const DateAndlikeDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StoreName = styled.div`
  width: 70%;
  height: 100%;
  color: ${fontColor};
  display: flex;
  flex-direction: column;
  p{
    font-weight: 700;
    font-size: 14px;
  }
`

const CommentDiv = styled.div`
display: flex;
color: ${fontColor};
margin-top: 18px;
margin-left: 5px;
h1{
  font-size: 12px;
  margin-top:2px;
  margin-left: 4px;
}
`

const Comment = styled(GoCommentDiscussion)`
font-size: 16px;
`

const LikeButton = styled.button`
  width: 100%;
  height: 45%;
  border: none;
  border-radius: 3px;
  color: ${fontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  cursor: pointer;
  h1{
    margin-left: 4px;
    font-size: 12px;
  }
  :hover {
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.04);
  }
`

const LikeIcon = styled(BiLike)`
font-size: 15px;
`

const BottonInfosBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  margin-top: 15px;
`
