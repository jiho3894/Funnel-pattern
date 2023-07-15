'use client';

import Email from '@/components/funnel/email';
import Phone from '@/components/funnel/phone';
import Result from '@/components/funnel/result';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Funnel = () => {
  const router = useRouter();
  const [registerData, setRegisterData] = useState<{
    email: string;
    phone: string;
  }>({ email: '', phone: '' });
  const [step, setStep] = useState<'이메일' | '전화번호' | '가입완료'>('이메일');
  return (
    <main>
      <span>step: {step}</span>
      {step === '이메일' && (
        <Email
          onNext={() => {
            setStep('전화번호');
            setRegisterData((prev) => ({ ...prev, email: 'charley' }));
          }}
        />
      )}
      {step === '전화번호' && (
        <Phone
          onNext={() => {
            setStep('가입완료');
            setRegisterData((prev) => ({ ...prev, phone: '01033332222' }));
          }}
        />
      )}
      {step === '가입완료' && <Result resultData={registerData} onNext={() => router.push('/')} />}
    </main>
  );
};

export default Funnel;
