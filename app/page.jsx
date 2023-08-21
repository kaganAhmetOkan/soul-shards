import style from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={style.main}>
      <Hero>Soul Shards</Hero>
    </main>
  );
};

// TODO: Make so the sigin does not popup immediately after the site loads, put it on User component click
// TODO: Connect firestore