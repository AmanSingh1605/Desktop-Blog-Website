import Link from "next/link";
import Styles from "./page.module.css";
import Image from "next/image";
import noImage from "public/no-photos.png"


export const metadata = {
  title: "Blogs",
  description: "Blog-past blogs page",
};


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/post", {cache: 'no-store'});
  if (!res.ok) throw new Error(" Failed to fetch data!! ");
  return res.json();
};

export default async function Blog() {
  const data = await getData();
  return (
    <div className={Styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={Styles.content} key={item._id}>
          <div className={Styles.desc}>
            <h3 className={Styles.contentTitle}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          <div className={Styles.imageContainer}>
            <Image src={item.img===""||item.img === "/"? noImage:item.img} fill={true} alt="image" />
          </div>
        </Link>
      ))}
    </div>
  );
}
