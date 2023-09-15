import { Field } from 'formik';

const Form1 = () => {
  return (
    <div className="overflow-auto flex flex-col gap-4 h-full w-full items-start font-mono text-left">
      <h2 className="text-Marine_blue font-black text-3xl tracking-[-2px]">
        Personal Info
      </h2>
      <p className="text-Cool_gray tracking-tighter self-start text-sm">
        Please provide your name, email, address, and phone
      </p>
      <label className="text-Marine_blue font-semibold" htmlFor="name">
        Name
      </label>
      <Field
        type="text"
        placeholder="e.g. Roy Joseph"
        id="name"
        name="name"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
      />
      <label className="text-Marine_blue font-semibold" htmlFor="email">
        Email Address
      </label>
      <Field
        type="email"
        placeholder="e.g. royjoseph@gmail.com"
        id="email"
        name="email"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
      />
      <label className="text-Marine_blue font-semibold" htmlFor="phone">
        Phone Number
      </label>
      <Field
        type="number"
        placeholder="e.g. 9447077177"
        id="phone"
        name="number"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
      />
    </div>
  );
};

export default Form1;
