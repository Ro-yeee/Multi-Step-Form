const StepNav = () => {
  return (
    <div className="relative flex-1">
      <img
        src="./images/bg-sidebar-desktop.svg"
        alt="Background Desktop"
        className="absolute w-full h-full rounded-lg object-cover max-lg:hidden"
      />
      <img
        src="./images/bg-sidebar-mobile.svg"
        alt="Background Mobile"
        className="hidden  max-lg:block w-screen object-cover h-56 absolute "
      />
      <div className="z-50 relative">
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
      </div>
    </div>
  );
};

export default StepNav;
