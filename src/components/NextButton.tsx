type dataType = {
  index: number;
};

const NextButton = ({index}: dataType ) => {
  return (
    <button
      type="submit"
      className="bg-Marine_blue ml-auto text-white py-4 px-6 self-end mt-4 rounded-xl ease-in-out duration-200 hover:bg-Purplish_blue">
      {index === 3 ? 'Submi' : 'Next Step'}
    </button>
  );
};

export default NextButton;
