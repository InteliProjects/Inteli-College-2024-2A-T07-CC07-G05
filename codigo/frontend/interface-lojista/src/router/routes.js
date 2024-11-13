import { createBrowserRouter } from "react-router-dom";
import AdicionarEstoque from "../pages/adicionar-estoque";
import ConsultarEstoque from "../pages/consultar-estoque";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/login";
import RemoverEstoque from "../pages/remover-estoque";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/consultar-estoque",
    element: <ConsultarEstoque />,
  },
  {
    path: "/adicionar-estoque",
    element: <AdicionarEstoque />,
  },
  {
    path: "/remover-estoque",
    element: <RemoverEstoque />,
  },
]);
