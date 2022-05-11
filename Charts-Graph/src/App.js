import { Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Chart } from "./Chart";
import { GetData } from "./components/inputData/GetData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <GetData /> } />
        <Route path="/chart" element={ <Chart /> } />
        <Route path="*" component={ <GetData /> } />
      </Routes>
      <Text margin="5px  0 10px">Made with ❤️ by Me (Akshay Kumar)</Text>
    </div>
  );
}

export default App;
