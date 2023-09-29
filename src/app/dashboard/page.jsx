"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import noImage from "public/no-photos.png";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const { data, isLoading, error, mutate } = useSWR(
    `/api/post?userName=${session?.data?.user.name}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;
    const img = e.target[3].value;

    try {
      await fetch("api/post", {
        method: "POST",
        body: JSON.stringify({
          userName: session?.data?.user?.name,
          title,
          desc,
          content,
          img,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      throw new Error("Something went wrong.");
    }
  };
  if (session.status === "loading") {
    return <div>Loading...</div>;
  }
  if (session.status == "authenticated") {
    console.log(data);
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Welcome {"User" && session?.data?.user.name},</h1>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>Your blogs:</div>
          <div className={styles.blogContainer}>
            {data?.map((item) => {
              return (
                <Link
                  href={`/blog/${item._id}`}
                  className={styles.blog}
                  key={item._id}
                >
                  <div className={styles.blogImg}>
                    <Image
                      src={
                        item.img === "" || item.img === "/" ? noImage : item.img
                      }
                      fill={true}
                      alt="image"
                    />
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.blogTitle}>{item.title}</div>
                    <div className={styles.blogDesc}>{item.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={styles.subContainer}>
            <div className={styles.title}>Create New Blog</div>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <label htmlFor="">Title:</label>
                <input type="text" />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="">Description: </label>
                <textarea name="" id="" cols="30" rows="1"></textarea>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="">Content</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="">Image(url):</label>
                <input type="text" />
              </div>
              <button type="submit"> Send </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  if (session.status == "unauthenticated") {
    router?.push("/dashboard/login");
  }
}
export default Dashboard;
