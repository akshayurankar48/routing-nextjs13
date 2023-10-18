import Link from 'next/link';
import styles from './projects.module.css';

export default function ProjectList() {
  return (
    <main>
      <h1>Product List</h1>

      <ul className={styles.ul}>
        <li>
          <Link href='/products/brakepads'>Brake pads</Link>
        </li>
        <li>
          <Link href='/products/exhausts'>Exhausts</Link>
        </li>
        <li>
          <Link href='/products/backrest'>Back Rest</Link>
        </li>
      </ul>
    </main>
  );
}
