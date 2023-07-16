import Form from '@/common/form';
import { Button } from 'charley-storybook';

interface EmailProps {
  onNext: () => void;
}

const Email = ({ onNext }: EmailProps) => {
  console.log('email');
  return (
    <Form>
      <span>이메일을 입력해주세요.</span>
      <input type="email" required />
      <Button text="제출하기" onClick={onNext} />
    </Form>
  );
};

export default Email;
