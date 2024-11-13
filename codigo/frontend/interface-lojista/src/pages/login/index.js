import { Link } from "react-router-dom";
import { ReactComponent as Vivinho } from "../../assets/svg/marca/vivinho.svg";
import Input from "../../components/input";
import {
  FormContainer,
  LogoContainer,
  PageContainer,
  PageContent,
  PageTitle,
} from "./style";

function LoginPage() {
  const inputData = [
    {
      type: "text",
      placeholder: "Login",
    },
    {
      type: "password",
      placeholder: "Senha",
    },
  ];
  return (
    <PageContainer>
      <PageContent>
        <PageTitle>Olá, lojista!</PageTitle>
        <LogoContainer>
          <Vivinho style={{ fill: "#fafafa" }} />
        </LogoContainer>
        <FormContainer>
          {inputData.map((item, number) => (
            <Input key={number + 1} inputData={item} />
          ))}
          <Link to="/home">
            <button>Clique</button>
          </Link>
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}

export default LoginPage;
