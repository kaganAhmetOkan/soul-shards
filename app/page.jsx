import style from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={style.main}>
      <Hero>Soul Shards</Hero>
      <p>{"Unfortunately, Soul Shards is not ready for public yet, and you cannot view all the information as of right now."}</p>
    </main>
  );
};