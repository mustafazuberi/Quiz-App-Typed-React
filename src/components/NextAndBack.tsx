const NextAndBack = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  return (
    <div>
      <div className="w-full flex justify-between">
        <button
          className="bg-blue-400 px-6 py-2 text-white text-[20px] rounded-[6px]"
          onClick={() => handleBack()}
        >
          Back
        </button>
        <button
          className="bg-blue-400 px-6 py-2 text-white text-[20px] rounded-[6px]"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NextAndBack;
