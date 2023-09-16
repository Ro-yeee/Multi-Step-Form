
const Step = (props:{index: number, detail: string}) => {
  return (
    <div className="flex items-center gap-6 cursor-pointer">
      <div className={`${props.index === 1 ? "bg-Light_gray text-black" : "text-Light_gray"} flex justify-center items-center w-11 h-11 border-Light_blue border-[1px] rounded-full font-bold`}>
        {props.index}
      </div>
      <div className='max-lg:hidden'>
        <h3 className="text-Light_gray font-medium text-sm">STEP {props.index}</h3>
        <h2 className="text-base font-extrabold text-white">{props.detail.toUpperCase()}</h2>
      </div>
    </div>
  );
}

export default Step
