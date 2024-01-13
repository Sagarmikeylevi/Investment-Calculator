const InputField = ({ id, label, type, value, onChange }) => {
  return (
    <div className="w-[50%]">
      <label
        htmlFor={id}
        className="mb-[0.25rem] font-semibold text-xs uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-[100%] p-[0.5rem] border-[1px] border-[#76c0ae] rounded-sm bg-transparent text-[#c2e9e0] outline-none hover:border-[#e7edec]"
      />
    </div>
  );
};

const UserInput = ({ onChange, userInput }) => {
  return (
    <div className="p-[1rem] max-w-[30rem] mt-[2rem] mb-[2rem] rounded-sm bg-[#2b996d]">
      <div className="flex justify-evenly gap-[1.5rem] mb-[1.5rem]">
        <InputField
          id="initial"
          label="Initial Investment"
          type="number"
          value={userInput.initialInvestment}
          onChange={(e) => onChange("initialInvestment", e.target.value)}
        />
        <InputField
          id="annual"
          label="Annual Investment"
          type="number"
          value={userInput.annualInvestment}
          onChange={(e) => onChange("annualInvestment", e.target.value)}
        />
      </div>
      <div className="flex justify-evenly gap-[1.5rem]">
        <InputField
          id="return"
          label="Expected Return"
          type="number"
          value={userInput.expectedReturn}
          onChange={(e) => onChange("returnRate", e.target.value)}
        />
        <InputField
          id="duration"
          label="Duration"
          type="number"
          value={userInput.duration}
          onChange={(e) => onChange("duration", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserInput;
