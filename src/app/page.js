import Counter from '@/components/counter/counter';
import Link from 'next/link';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <h1>this is main page</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className='btn btn-info mt-5'>About</button>
      </Link>
    </div>
  );
};

export default MainPage;