import { Field } from 'formik';

const Form2 = () => {
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
      <Field
        type="text"
        id="fname"
        placeholder="e.g. Roy Joseph"
        name="fname"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
      />
      <label className="text-Marine_blue font-semibold" htmlFor="lname">
        Last Name
      </label>
      <Field
        type="text"
        id="lname"
        placeholder="Joseph"
        name="lname"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
      />
    </div>
  );
};

export default Form2;
