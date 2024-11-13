import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "./styles/fonts/roboto.css";
import "./styles/reset.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
