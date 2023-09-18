const WrongAndCorrectAnswers = ({
  correctAnswers,
  inCorrectAnswers,
}: {
  correctAnswers: number;
  inCorrectAnswers: number;
}) => {
  return (
    <div className="flex flex-col justify-end items-end">
      <span className="text-green-600">Correct Answers : {correctAnswers}</span>
      <span className="text-red-600">Wrong Answers : {inCorrectAnswers}</span>
    </div>
  );
};

export default WrongAndCorrectAnswers;
