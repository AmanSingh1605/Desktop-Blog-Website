"use client";
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/themeContext";

export default function ThemeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  //   const mode = "light";
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div
        className={styles.circle}
        style={mode === 'light' ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}
