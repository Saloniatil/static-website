import "./App.css";
import MyPage from "./MyPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter> 
        <MyPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
