import Form from '@/common/form';

interface ResultProps {
  onNext: () => void;
  resultData?: {
    email: string;
    phone: string;
  };
}

const Result = ({ onNext, resultData }: ResultProps) => {
  return (
    <Form>
      가입완료!!
      <span>email: {resultData?.email}</span>
      <span>phone: {resultData?.phone}</span>
    </Form>
  );
};

export default Result;
