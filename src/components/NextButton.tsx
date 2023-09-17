type dataType = {
  index: number;
};

const NextButton = ({ index }: dataType) => {
  return (
    <button
      type="submit"
      className="bg-Marine_blue text-white ml-auto py-4 px-6 mt-4 rounded-xl ease-in-out duration-200 hover:bg-Purplish_blue">
      {index === 3 ? 'Submit' : 'Next Step'}
    </button>
  );
};

export default NextButton;
