const Input = ({ title, value, onChange }: any) => {
  return (
    <div className="flex flex-col ">
      <label className="text-gray-700 font-semibold">{title}</label>
      <input
        type="text"
        placeholder="Email address"
        className="border border-gray-700 outline-none rounded-md p-3"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
