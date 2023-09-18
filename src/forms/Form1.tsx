import { ErrorMessage, Field } from 'formik';

const Form1 = () => {
  return (
    <div className="overflow-auto flex flex-col gap-2 h-full w-full items-start font-mono text-left">
      <h2 className="text-Marine_blue font-black text-3xl tracking-[-2px]">
        Personal Info
      </h2>
      <p className="text-Cool_gray tracking-tighter self-start text-sm">
        Please provide your name, address, and phone
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
      <span className="text-Strawberry_red text-sm">
        <ErrorMessage name="name" />
      </span>
      <label className="text-Marine_blue font-semibold" htmlFor="address">
        Address
      </label>
      <Field
        as="textarea"
        type="text"
        placeholder="e.g. XYZ Street, Avenue Center"
        id="address"
        name="address"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl min-h-[50px]"
      />
      <span className="text-Strawberry_red text-sm">
        <ErrorMessage name="address" />
      </span>
      <label className="text-Marine_blue font-semibold" htmlFor="phone">
        Phone Number
      </label>
      <Field
        type="string"
        placeholder="e.g. 9447077177"
        id="phone"
        name="number"
        className="border-Light_gray border-[1px] p-3 w-full rounded-xl"
      />
      <span className="text-Strawberry_red text-sm">
        <ErrorMessage name="number" />
      </span>
    </div>
  );
};

export default Form1;
