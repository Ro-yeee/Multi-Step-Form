import { useState } from 'react';
import Form2 from './forms/Form2';
import NextButton from './components/NextButton';
import StepNav from './components/StepNav';
import { Formik, Form } from 'formik';
import Form1 from './forms/Form1';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
import BackButton from './components/BackButton';
import SuccessPage from './forms/SuccessPage';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [success, setSuccess] = useState(false);

  const next = () => {
    if (currentIndex === 3) return;
    setCurrentIndex(currentIndex + 1);
  };

  const back = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const goto = (step: number) => {
    setCurrentIndex(step);
  };

  const formValidationSchema = z
    .object({
      name: z
        .string()
        .min(3, 'Minimum 3 characters')
        .max(20, 'Maximum 20 characters'),
      address: z
        .string()
        .min(10, 'Minimun 10 characters')
        .max(100, 'Maximum 100 characters'),
      email: z
        .string()
        .email()
        .refine(
          (val) => val.endsWith('@gmail.com'),
          'Should end with @gmail.com',
        ),
      number: z
        .string()
        .min(10, 'Should contain minimum 10 digits')
        .max(18, 'Should not exceed 18 digits'),
      user_name: z
        .string()
        .min(5, 'Minimun 5 characters')
        .max(14, 'Maximum 14 characters'),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password length should not exceed 20 characters')
        .regex(/\d/, 'Password must contain at least 1 number'),
      plan: z.enum(['Arcade', 'Advanced', 'Pro']),
      yearly: z.boolean(),
      addOn: z.string().array().optional(),
    })

  return (
    <div className=" w-full flex justify-center items-center p-0 lg:py-12">
      <div className="bg-Alabaster flex max-lg:flex-col h-[600px] w-[1000px] p-4 rounded-lg max-lg:h-full max-lg:w-screen max-lg:rounded-none max-lg:p-0 max-lg:bg-transparent">
        <StepNav goto={goto} currentIndex={currentIndex} />
        <div className="flex-[2] z-20 w-full h-full p-8 bg-transparent max-lg:max-w-[800px] self-center">
          <div className="max-lg:bg-white w-full h-full rounded-2xl">
            {success ? (
              <SuccessPage />
            ) : (
              <Formik
                initialValues={{
                  name: '',
                  address: '',
                  email: '',
                  number: '',
                  user_name: '',
                  password: '',
                  plan: 'Arcade',
                  yearly: false,
                  addOn: [],
                }}
                validationSchema={toFormikValidationSchema(
                  formValidationSchema,
                )}
                onSubmit={(values) => {
                  next();
                  if (currentIndex === 3) {
                    console.log(values);
                    setSuccess(true);
                  }
                }}>
                {({ values }) => (
                  <Form className="flex flex-col h-full w-full font-mono pl-10 pt-10 pr-12 max-lg:p-4">
                    {currentIndex === 0 ? (
                      <Form1 />
                    ) : currentIndex === 1 ? (
                      <Form2 />
                    ) : currentIndex === 2 ? (
                      <Form3 values={values} />
                    ) : (
                      <Form4 values={values} />
                    )}
                    <div className="w-full flex flex-row justify-between">
                      <BackButton index={currentIndex} back={back} />
                      <NextButton index={currentIndex} />
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

