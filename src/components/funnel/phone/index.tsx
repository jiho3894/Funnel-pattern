import Form from '@/common/form';
import { Button } from 'charley-storybook';

interface PhoneProps {
  onNext: () => void;
}

const Phone = ({ onNext }: PhoneProps) => {
  return (
    <Form>
      <span>전화번호를 입력해주세요.</span>
      <input type="tel" />
      <Button onClick={onNext} text="제출하기" />
    </Form>
  );
};

export default Phone;
