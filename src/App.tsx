import './App.css';
import StepNav from './components/StepNav';

function App() {
  return (
    <div className=" w-full flex justify-center items-center p-0 lg:py-12">
      <div className="bg-Alabaster flex max-lg:flex-col  h-[600px] w-[1000px] p-4 rounded-lg max-lg:h-screen max-lg:w-screen max-lg:rounded-none max-lg:p-0">
        <StepNav />
        <div className='flex-[2] z-20 w-full h-full p-8 bg-transparent max-lg:mt-[-150px]'>
          <div className='bg-white w-full h-full rounded-2xl'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
