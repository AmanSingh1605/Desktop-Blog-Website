"use client";
import { useContext, useState } from "react";
import styles from "./page.module.css";
import Hide from "public/hide.png";
import Show from "public/show.png";
import Image from "next/image";
import { ThemeContext } from "@/context/themeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [visible, setVisible] = useState(false);
  const { mode } = useContext(ThemeContext);
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res =await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.status === 201)
        router.push("/dashboard/login?success=>Account created");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Sign Up</div>
      {error && "Something went wrong"}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="email" />
        </div>
        <div className={styles.inputContainer}>
          <input type={!visible ? "text" : "password"} placeholder="password" />
          <div
            className={styles.imgContainer}
            onClick={() => setVisible(!visible)}
          >
            {!visible ? (
              <Image
                src={Show}
                alt="image"
                fill={true}
                sizes="24px"
                style={mode === "dark" ? { filter: "invert()" } : null}
              />
            ) : (
              <Image
                src={Hide}
                alt="image"
                fill={true}
                sizes="24px"
                style={mode === "dark" ? { filter: "invert()" } : null}
              />
            )}
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <Link href="login" className={styles.text}>
        already have an account? Login Here
      </Link>

    </div>
  );
}
