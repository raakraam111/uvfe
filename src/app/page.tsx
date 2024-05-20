import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Web3 Auth App</h1>
      <Link href="/auth">Go to Auth</Link>
    </div>
  );
}
