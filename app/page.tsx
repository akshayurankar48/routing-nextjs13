import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href='/projects/list'>See Projects</Link>
      <Link href='/products/list'>See Products</Link>
      <Link href='/orders/list'>See Orders</Link>
      <h1>Home</h1>
    </main>
  );
}
