'use client';

import { useFunnel } from '@toss/use-funnel';

const Signup = () => {
  const [Funnel, setStep] = useFunnel(['test', '전화번호', '가입완료'] as const, {
    initialStep: 'test',
  });
  return (
    <Funnel>
      <Funnel.Step name="test">
        <div>Email</div>
      </Funnel.Step>
      <Funnel.Step name="전화번호">
        <div>Email</div>
      </Funnel.Step>
      <Funnel.Step name="가입완료">
        <div>Email</div>
      </Funnel.Step>
    </Funnel>
  );
};

const Page = () => {
  return <div></div>;
};

export default Page;
