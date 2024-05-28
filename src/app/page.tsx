"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/auth');
  },[]); 

  return (
    <div>
      <h1>Welcome to the Web3 Auth App</h1>
      <Link href="/auth">Go to Auth</Link>
    </div>
  );
}
