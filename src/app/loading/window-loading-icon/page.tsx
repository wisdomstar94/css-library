"use client"
import styles from './page.module.css';

export default function Page() {
  return (
    <div className='w-full relative p-4'>

      <div className={styles['loading-icon']}>
        <div>
          <div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
          </div>
        </div>
      </div>

    </div>
  );
}
