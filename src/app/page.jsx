import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titleText}>
        <h1>Build design for your digital proucts.</h1>
        <p className={styles.text}>
          We bring your idea into reality. We bring the teams together from
          every corner of the world. World greatest talents are here to help
          you.
        </p>
        <Button url="/about" text="See our Work" />
      </div>
      <div className={styles.imageContainer}>
        <Image src={Hero} alt="pic" />
      </div>
    </div>
  );
}
