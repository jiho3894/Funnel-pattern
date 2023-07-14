'use client';

import { useState } from 'react';

const Funnel = () => {
  const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<'이메일' | '전화번호' | '가입완료'>('이메일');
  return (
    <main>
      <span>{step}</span>
      {step === '이메일' && <div onClick={() => setStep('전화번호')}>이메일을 입력해주세요.</div>}
      {step === '전화번호' && <div onClick={() => setStep('가입완료')}>전화번호를 입력해주세요.</div>}
      {step === '가입완료' && <div onClick={() => setStep('이메일')}>가입완료!</div>}
    </main>
  );
};

export default Funnel;
