import { calculateInvestmentResults, formatter } from "./util/investment";

const ResultList = ({ userInput }) => {
  const results = calculateInvestmentResults(userInput);

  // console.log(data);
  return (
    <div className="max-w-[50rem] flex items-center p-[1rem]">
      <table className="mb-[2rem] text-right">
        <thead className="text-xs text-[#83e6c0] p-[1rem]">
          <tr>
            <th>Year</th>
            <th className="p-2">Investment Value</th>
            <th className="p-2">Interest(Year)</th>
            <th className="p-2">Total Interest</th>
            <th className="pl-2">Invested Capital</th>
          </tr>
        </thead>

        <tbody className="text-[#c2e9e0] text-sm">
          {results.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              userInput.initialInvestment;

            const totalAmmountInvest =
              userInput.initialInvestment +
              userInput.annualInvestment * result.year;
            return (
              <tr key={result.year}>
                <td className="px-2">{result.year}</td>
                <td className="px-2">
                  {formatter.format(result.valueEndOfYear)}
                </td>
                <td className="px-2">{formatter.format(result.interest)}</td>
                <td className="px-2">{formatter.format(totalInterest)}</td>
                <td className="px-2">{formatter.format(totalAmmountInvest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
