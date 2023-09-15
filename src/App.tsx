import { useState } from 'react';
import Form from './components/Form';
import Form2 from './components/Form2';
import NextButton from './components/NextButton';
import StepNav from './components/StepNav';
import { useFormik } from 'formik';

function App() {
  const [index, setIndex] = useState(0);

  const { handleChange, handleSubmit, values, handleBlur } = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      fname: '',
      lname: '',
    },
    onSubmit: (values) => {
      if (index === 1) {
        console.log('FINISH');
        console.log(values);
      }
      if (index === 0) setIndex(1);
      else setIndex(0);
    },
  });

  return (
    <div className=" w-full flex justify-center items-center p-0 lg:py-12">
      <div className="bg-Alabaster flex max-lg:flex-col  h-[600px] w-[1000px] p-4 rounded-lg max-lg:h-screen max-lg:w-screen max-lg:rounded-none max-lg:p-0">
        <StepNav />
        <div className="flex-[2] z-20 w-full h-full p-8 bg-transparent max-lg:mt-[-200px]">
          <div className="max-lg:bg-white w-full h-full rounded-2xl">
            <form
              className="flex flex-col h-full w-full font-mono pl-10 pt-10 pr-12 max-lg:p-4"
              onSubmit={handleSubmit}>
              {index === 0 ? (
                <Form
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              ) : (
                <Form2
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              )}
              <NextButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
