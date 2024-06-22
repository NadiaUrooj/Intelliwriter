import "./App.css";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Section7 from "./Components/Section7";
import Section8 from "./Components/Section8";
import { GrWheelchair } from "react-icons/gr";

function App() {
  return (
    <div className="App bg-[#0f062c]" style={{ fontFamily: "ar sans-serif" }}>
      <style>
        {`
          .wheelchair-icon-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #FFFF00;
            border: 4px solid #7B1FA2;
            border-radius: 50%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .wheelchair-icon {
            color: #7B1FA2;
            font-size: 40px;
            transition: color 0.3s ease;
          }
        `}
      </style>
      <div className="wheelchair-icon-container cursor-pointer">
        <GrWheelchair className="wheelchair-icon" />
      </div>
      <Navbar />
      <Background>
        <div className="h-20% bg-[#0F062C]"></div>
        <Section1 />
      </Background>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}

export default App;
