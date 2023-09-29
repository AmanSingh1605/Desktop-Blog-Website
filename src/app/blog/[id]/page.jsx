import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    throw new Error(" failed to fetch data !!!");
  }
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return { title: post.title, description: post.desc };
}

export default async function Blogpost({ params }) {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.topTitle}>
        <div className={styles.headerText}>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} fill={true} alt="image" />
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.profile}>
          <Image src={data.img} fill={true} alt="profile_pic" />
        </div>
        <div className={styles.name}>{data.userName}</div>
      </div>
      <p className={styles.content}>{data.content}</p>
    </div>
  );
}
