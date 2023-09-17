import Step from "./Step";

const StepNav = () => {
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
        <Step index={1} detail={'your info'} />
        <Step index={2} detail={'Account'} />
        <Step index={3} detail={'Select plan'} />
        <Step index={4} detail={'Add-ons'} />
      </div>
    </div>
  );
};

export default StepNav;
