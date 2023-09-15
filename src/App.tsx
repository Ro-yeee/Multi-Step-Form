import './App.css';
import Form from './components/Form';
import NextButton from './components/NextButton';
import StepNav from './components/StepNav';

function App() {
  return (
    <div className=" w-full flex justify-center items-center p-0 lg:py-12">
      <div className="bg-Alabaster flex max-lg:flex-col  h-[600px] w-[1000px] p-4 rounded-lg max-lg:h-screen max-lg:w-screen max-lg:rounded-none max-lg:p-0">
        <StepNav />
        <div className="flex-[2] z-20 w-full h-full p-8 bg-transparent max-lg:mt-[-200px]">
          <div className="max-lg:bg-white w-full h-full rounded-2xl">
            <form className="flex flex-col h-full w-full font-mono pl-10 pt-10 pr-12 max-lg:p-4">
              <Form />
              <NextButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
