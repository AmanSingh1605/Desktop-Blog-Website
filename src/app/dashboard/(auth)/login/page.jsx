"use client";
import { useContext, useState } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Show from "public/show.png";
import Hide from "public/hide.png";
import { useRouter } from "next/navigation";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const session = useSession();
  const router = useRouter();
  const { mode } = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  if (session.status == "unauthenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input type="email" placeholder="email" />
          </div>
          <div className={styles.inputContainer}>
            <input
              type={!visible ? "text" : "password"}
              placeholder="password"
            />
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
          <button type="submit">Sign In</button>
        </form>
        {/* <button onClick={() => signIn("google")} className={styles.googleButton}>Login with Google</button> */}
        <Link href="register" className={styles.text}>
          Don't have an account? register here
        </Link>
      </div>
    );
  }
}
