"use client";
import { links } from "@/data";
import Link from "next/link";
import styles from "./navbar.module.css";
import ThemeToggle from "../themeToggleButton/themeToggle";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>Blog-Past</div>
      <div className={styles.links}>
        <ThemeToggle />
        {links.map((item) => {
          return (
            <Link href={item.url} key={item.id} className={styles.link}>
              {item.title}
            </Link>
          );
        })}
        {session.status === "authenticated" ? (
          <button onClick={signOut} className={styles.logout}>
            Logout
          </button>
        ) : (
          <button
            onClick={() => router.push("/dashboard/login")}
            className={styles.logout}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
