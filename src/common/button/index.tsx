interface ButtonProps {
  onNext: () => void;
}

const Button = ({ onNext }: ButtonProps) => {
  return <button onClick={onNext}>제출하기</button>;
};

export default Button;
