'use client';
import { Buton, Loading } from 'charley-storybook-emotion';
import Link from 'next/link';

const Home = () => {
  return (
    <Link href="/funnel">
      가입 페이지로 이동
      <Buton onClick={() => {}} text="가입하기" />
      <Loading />
    </Link>
  );
};

export default Home;
