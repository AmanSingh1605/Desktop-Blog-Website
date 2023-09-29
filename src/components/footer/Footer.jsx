import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>	&#169; Next.js test Desgin blog site</div>
      <div className={styles.icons}>
        <Image
          width={15}
          height={15}
          src="/1.png"
          alt="facebook"
          className={styles.icon}
        />
        <Image
          width={15}
          height={15}
          src="/2.png"
          alt="facebook"
          className={styles.icon}
        />
        <Image
          width={15}
          height={15}
          src="/3.png"
          alt="facebook"
          className={styles.icon}
        />
        <Image
          width={15}
          height={15}
          src="/4.png"
          alt="facebook"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
