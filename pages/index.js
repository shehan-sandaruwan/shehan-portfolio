import Head from "next/head";
import Image from "next/image";
import NavBar from "../Component/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
}
