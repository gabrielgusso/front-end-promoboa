import styled from "styled-components"
import { yellow } from "../assets/color"
import { useState } from "react"
import { gray } from "../assets/color"
import { signIn, signUp } from "../services/authApi"
import { useNavigate } from "react-router-dom"

export default function Auth() {
  const [login, setLogin] = useState("createAcc")
  const [infos, setInfos] = useState({})
  const navigate = useNavigate()


  async function submitInfos(e) {
    e.preventDefault()

    if (e.target.name.value) {
      const body = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }
      try {
        await signUp(body)
        setLogin("login")
      } catch (err) {
        console.log(err)
      }
    } else {
      const body = {
        email: e.target.email.value,
        password: e.target.password.value,
      }
      try {
        const result = await signIn(body)
        localStorage.setItem("Bearer", result.token)
        localStorage.setItem("userInfos", JSON.stringify(result.user))
        // console.log( JSON.parse(localStorage.getItem("userInfos")))
        navigate("/")
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Container>
      <CentralBox login={login}>
        <Top>
          <CreateAcc onClick={() => setLogin("createAcc")}>
            Criar Conta <SelectBarLeft login={login} />
          </CreateAcc>
          <Login onClick={() => setLogin("login")}>
            Entrar <SelectBarRigth login={login} />
          </Login>
        </Top>
        <Form onSubmit={submitInfos}>
          {login === "createAcc" && (
            <>
              <InputName>
                <h1>Nome</h1>
              </InputName>
              <input
                name="name"
                placeholder="Nome"
                type="name"
                required
                onChange={(e) => setInfos({ ...infos, name: e })}
              />
            </>
          )}
          <InputName>
            <h1>E-mail</h1>
          </InputName>
          <input
            name="email"
            placeholder="email@exemplo.com"
            type="email"
            required
            // onChange={(e) =>}
          />
          <InputName>
            <h1>Senha</h1>
          </InputName>
          <input
            name="password"
            placeholder="******"
            type="password"
            required
            // onChange={(e) =>}
          />
          {login === "createAcc" && (
            <InputName>
              <h1>A senha deve ter no mínimo 6 caracteres</h1>
            </InputName>
          )}
          <ButtonDiv>
            <CancelButton onClick={() => navigate("/")}>Cancelar</CancelButton>
            <ConfirmButton type="submit">Confirmar</ConfirmButton>
          </ButtonDiv>
        </Form>
      </CentralBox>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e4e2;
`

const CentralBox = styled.div`
  background-color: white;
  width: 450px;
  height: ${(prop) => (prop.login === "createAcc" ? "60vh" : "48vh")};
  border-radius: 10px;
  border: 1px solid ${yellow};
`
const Top = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: lightblue; */
  display: flex;
`

const CreateAcc = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid ${gray};
`

const Login = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid ${gray};
`
const SelectBarLeft = styled.div`
  background-color: ${(prop) =>
    prop.login === "createAcc" ? yellow : "white"};
  height: 6%;
  width: 100%;
  position: absolute;
  bottom: 0%;
  ${CreateAcc}:hover & {
    background-color: yellow;
    opacity: 0.9;
  }
`
const SelectBarRigth = styled.div`
  background-color: ${(prop) => (prop.login === "login" ? yellow : "white")};
  height: 6%;
  width: 100%;
  position: absolute;
  bottom: 0%;
  ${Login}:hover & {
    background-color: yellow;
    opacity: 0.9;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  padding-top: 40px;
  position: relative;
  input {
    height: 50px;
    width: 90%;
    border-radius: 3px;
    border: 1px solid ${gray};
    ::placeholder {
      padding-left: 5px;
    }
  }
  h1 {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`
const InputName = styled.div`
  width: 90%;
`

const ButtonDiv = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 5%;
  position: absolute;
  bottom: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CancelButton = styled.button`
  width: 45%;
  height: 60%;
  border-radius: 5px;
  border: 2px solid ${yellow};
  color: ${yellow};
  font-size: 18px;
  background-color: white;
  font-weight: 700;
  cursor: pointer;
`

const ConfirmButton = styled.button`
  width: 45%;
  height: 60%;
  border-radius: 5px;
  border: none;
  background-color: ${yellow};
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`
