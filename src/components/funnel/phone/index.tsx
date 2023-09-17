import Form from '@/common/form';

interface PhoneProps {
  onNext: () => void;
}

const Phone = ({ onNext }: PhoneProps) => {
  return (
    <Form>
      <span>전화번호를 입력해주세요.</span>
      <input type="tel" />
    </Form>
  );
};

export default Phone;
