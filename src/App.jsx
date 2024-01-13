import investment_img from "/images/investment-calculator-logo.png";
import UserInput from "./UserInput";
import ResultList from "./ResultList";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isIputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <header className="text-center mt-[1rem] flex flex-col justify-center items-center space-y-2">
        <img
          src={investment_img}
          alt="logo_investment"
          className="w-[5rem] h-[5rem] object-contain bg-transparent"
        />
        <h1 className="text-[1.5rem]">Investment Calculator</h1>
      </header>

      <UserInput onChange={handleChange} userInput={userInput} />
      {!isIputIsValid && <p>Please enter valid input</p>}
      {isIputIsValid && <ResultList userInput={userInput} />}
    </>
  );
}

export default App;
