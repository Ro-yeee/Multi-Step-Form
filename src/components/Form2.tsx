
const Form2 = ({values ,handleChange, handleBlur}) => {
  return (
    <div className="overflow-auto flex flex-col gap-4 h-full w-full items-start font-mono text-left">
      <h2 className="text-Marine_blue font-black text-3xl tracking-[-2px]">
        Name
      </h2>
      <p className="text-Cool_gray tracking-tighter self-start text-sm">
        Please provide your Names
      </p>
      <label className="text-Marine_blue font-semibold" htmlFor="fname">
        First Name
      </label>
      <input
        type="text"
        placeholder="e.g. Roy Joseph"
        id="fname"
        name="fname"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fname}
      />
      <label className="text-Marine_blue font-semibold" htmlFor="lname">
        Last Name
      </label>
      <input
        type="text"
        placeholder="Joseph"
        id="lname"
        name="lname"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lname}
      />
    </div>
  );
};

export default Form2;
