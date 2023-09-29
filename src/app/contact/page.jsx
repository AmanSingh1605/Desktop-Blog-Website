import Image from "next/image";
import styles from "./page.module.css";
import Img from "public/contact.png";
import Button from "@/components/button/button";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.formBody}>
        <div className={styles.imageContainer}>
          <Image src={Img} alt="contact image" fill={true} />
        </div>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
}
