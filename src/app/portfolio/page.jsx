import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Portolio() {
  const data = [
    {
      url: "/portfolio/illustration",
      img: "/illustration.png",
      text: "Illustrations",
    },
    { url: "/portfolio/websites", img: "/websites.jpg", text: "Websites" },
    { url: "/portfolio/applications", img: "/apps.jpg", text: "Applications" },
  ];
  return (
    <div className={styles.content}>
      <h2>Choose a gallery</h2>
      <div className={styles.gallery}>
        {data.map((item) => {
          return (
            <Link href={item.url} className={styles.frame} key={item.url}>
              <Image
                src={item.img}
                alt={item.text}
                fill="true"
                key={item.text}
              />
              <h2>{item.text}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
