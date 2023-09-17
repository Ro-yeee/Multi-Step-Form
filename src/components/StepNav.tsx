
type gotoFunctionindex = {
  goto(val: number): void;
  currentIndex: number;
};

const StepNav = ({ goto, currentIndex }: gotoFunctionindex) => {

  const steps: string[] = ['your info', 'Account', 'Select plan', 'Add-ons'];

  return (
    <div className="relative">
      <img
        src="./images/bg-sidebar-desktop.svg"
        alt="Background Desktop"
        className="absolute w-full h-full rounded-lg object-cover max-lg:hidden"
      />
      <img
        src="./images/bg-sidebar-mobile.svg"
        alt="Background Mobile"
        className="hidden  max-lg:block w-screen object-cover h-[16rem] absolute "
      />
      <div className="z-50 relative p-8 pt-12 flex flex-col gap-8 justify-center max-lg:flex-row">
        {steps.map((item, index) => (
          <div
            onClick={() => goto(index)}
            className="flex items-center gap-6 cursor-pointer">
            <div
              className={`${
                currentIndex  === index
                  ? 'bg-Light_gray text-black'
                  : 'text-Light_gray'
              } flex justify-center items-center w-11 h-11 border-Light_blue border-[1px] duration-300 ease-in rounded-full font-bold`}>
              {index+1}
            </div>
            <div className="max-lg:hidden">
              <h3 className="text-Light_gray font-medium text-sm">
                STEP {index+1}
              </h3>
              <h2 className="text-base font-extrabold text-white">
                {item.toUpperCase()}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepNav;
