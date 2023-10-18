import Link from 'next/link';
import styles from './projects.module.css';

export default function ProjectList() {
  return (
    <main>
      <h1>Order List</h1>

      <ul className={styles.ul}>
        <li>
          <Link href='/orders/1'>Brake pads</Link>
        </li>
        <li>
          <Link href='/orders/2'>Exhausts</Link>
        </li>
        <li>
          <Link href='/orders/3'>Back Rest</Link>
        </li>
      </ul>
    </main>
  );
}
