import { HomePage } from "../pages/home";
import { MainLayout } from "./layout/main-layout/MainLayout";
import "./styles/null.css";
import "./styles/App.css";

function App() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

export default App;
