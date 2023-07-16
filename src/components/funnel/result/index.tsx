import Form from '@/common/form';
import { Button } from 'charley-storybook';

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
      <Button onClick={onNext} text="제출하기" />
    </Form>
  );
};

export default Result;
