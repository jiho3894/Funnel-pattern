import Button from '@/common/button';
import Form from '@/common/form';

interface ResultProps {
  onNext: () => void;
  resultData?: {
    email: string;
    phone: string;
  };
}

const Result = ({ onNext, resultData }: ResultProps) => {
  console.log('result');
  return (
    <Form>
      가입완료!!
      <span>email: {resultData?.email}</span>
      <span>phone: {resultData?.phone}</span>
      <Button onNext={onNext} />
    </Form>
  );
};

export default Result;
