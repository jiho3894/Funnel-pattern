import Button from '@/common/button';
import Form from '@/common/form';

interface EmailProps {
  onNext: () => void;
}

const Email = ({ onNext }: EmailProps) => {
  return (
    <Form>
      <span>이메일을 입력해주세요.</span>
      <input type="email" required />
      <Button onNext={onNext} />
    </Form>
  );
};

export default Email;
