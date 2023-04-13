import styled from "styled-components"
import { FaSearchDollar } from "react-icons/fa"
import { IoMdAddCircle } from "react-icons/io"
import Search from "./SearchBox"

export default function Header() {
  return (
    <HeaderWidth>
      <Container>
        <Logo>
          <BoxIcon>
            <Icon></Icon>
          </BoxIcon>
          <h1>Promoboa</h1>
        </Logo>
        <Search></Search>
        <ProfileAndOfferDiv>
          <NewOfferButton>
            <AddIcon />
            <h1>Nova Oferta</h1>
          </NewOfferButton>
          <Profile>
          </Profile>
        </ProfileAndOfferDiv>
      </Container>
    </HeaderWidth>
  )
}

const HeaderWidth = styled.div`
  width: 100%;
  background-color: white;
`

const Container = styled.div`
  width: 1300px;
  margin: auto;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Prompt", sans-serif;
  color: #ffd700;
  font-size: 30px;
  font-weight: 700;
  padding: 0.2%;
`

const Logo = styled.div`
  width: 25%;
  display: flex;
  h1 {
    margin-left: 7px;
    padding-top: 4px;
  }
`

const Icon = styled(FaSearchDollar)`
  color: white;
  font-weight: 700;
  font-size: 30px;
`
const BoxIcon = styled.div`
  background-color: #ffd700;
  border-radius: 5px;
  padding: 3px 3px 0 3px;
`
const ProfileAndOfferDiv = styled.div`
  width: 25%;
  height: 85%;
  display: flex;
  justify-content: space-between;
`

const NewOfferButton = styled.button`
  background-color: #ffd700;
  border: none;
  height: 100%;
  width: 45%;
  border-radius: 3px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h1{
    margin-left: 5px;
    margin-top: 4px;
  }
  :hover {
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.04);
  }
`
const AddIcon = styled(IoMdAddCircle)`
  font-size: 25px;
`
const Profile = styled.div`
  background-color: #E5E4E2;
  width: 45%;
  height: 100%;
  border-radius: 3px;
`