import investment_img from "/images/investment-calculator-logo.png";
import UserInput from "./UserInput";
import ResultList from "./ResultList";

function App() {
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

      <UserInput />
      <ResultList />
    </>
  );
}

export default App;
