import style from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={style.main}>
      <Hero>Soul Shards</Hero>
    </main>
  );
};