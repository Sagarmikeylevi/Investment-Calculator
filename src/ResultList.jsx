const ResultList = () => {
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
          <tr>
            <td className="px-2">1</td>
            <td className="px-2">$10,850</td>
            <td className="px-2">$550</td>
            <td className="px-2">$550</td>
            <td className="px-2">$10,300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
