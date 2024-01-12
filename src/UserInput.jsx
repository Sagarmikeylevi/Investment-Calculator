const InputField = ({ id, label, type }) => {
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
        className="w-[100%] p-[0.5rem] border-[1px] border-[#76c0ae] rounded-sm bg-transparent text-[#c2e9e0] outline-none hover:border-[#e7edec]"
      />
    </div>
  );
};

const UserInput = () => {
  return (
    <div className="p-[1rem] max-w-[30rem] mt-[2rem] mb-[2rem] rounded-sm bg-[#2b996d]">
      <div className="flex justify-evenly gap-[1.5rem] mb-[1.5rem]">
        <InputField id="initial" label="Initial Investment" type="number" />
        <InputField id="annual" label="Annual Investment" type="number" />
      </div>
      <div className="flex justify-evenly gap-[1.5rem]">
        <InputField id="return" label="Expected Return" type="number" />
        <InputField id="duration" label="Duration" type="number" />
      </div>
    </div>
  );
};

export default UserInput;
