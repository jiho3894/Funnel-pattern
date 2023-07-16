'use client';

import { Button } from 'charley-storybook';
import Link from 'next/link';

const Home = () => {
  return (
    <Link href="/funnel">
      가입 페이지로 이동
      <Button onClick={() => {}} text="가입하기" />
    </Link>
  );
};

export default Home;
