import Link from "next/link";
import styles from "./button.module.css";
export default function Button({ url, text }) {
  return (
    <div className={styles.container}>
      <Link href={url}>
        <button>{text}</button>
      </Link>
    </div>
  );
}
