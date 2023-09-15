import { useState } from 'react';
import Form2 from './components/Form2';
import NextButton from './components/NextButton';
import StepNav from './components/StepNav';
import { Formik, Form } from 'formik';
import Form1 from './components/Form1';

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className=" w-full flex justify-center items-center p-0 lg:py-12">
      <div className="bg-Alabaster flex max-lg:flex-col  h-[600px] w-[1000px] p-4 rounded-lg max-lg:h-screen max-lg:w-screen max-lg:rounded-none max-lg:p-0">
        <StepNav />
        <div className="flex-[2] z-20 w-full h-full p-8 bg-transparent max-lg:mt-[-200px]">
          <div className="max-lg:bg-white w-full h-full rounded-2xl">
            <Formik
              initialValues={{
                name: '',
                email: '',
                number: '',
                fname: '',
                lname: '',
              }}
              onSubmit={(values) => {
                if (index === 1) {
                  console.log('FINISH');
                  console.log(values);
                }
                if (index === 0) setIndex(1);
                else setIndex(0);
              }}>
              {() => (
                <Form className="flex flex-col h-full w-full font-mono pl-10 pt-10 pr-12 max-lg:p-4">
                  {index === 0 ? <Form1 /> : <Form2 />}
                  <NextButton />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
