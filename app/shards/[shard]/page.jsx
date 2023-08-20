import { redirect } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import Spells from "@/components/Spells/Spells";
import fetchData from "@/utils/fetchData";
import sortSpells from "@/utils/sortSpells";

export default async function ShardPage({ params, searchParams }) {
  const shards = ["purple", "black", "white", "grey", "green", "red"];
  const shard = params.shard;
  const localhost = process.env.LOCALHOST;

  if (!shards.includes(shard)) {
    redirect("/shards");
  };

  const spells = await fetchData(`${localhost}/json/spells.json`);
  const filteredSpells = [];
  
  spells.forEach(spell => {
    if (spell.schools.includes(shard)) filteredSpells.push(spell);
  });
  
  const sortedSpells = sortSpells(filteredSpells, searchParams.sort);

  return (
    <main>
      <Hero color={shard}>{`${shard} shard`}</Hero>
      <Spells spells={sortedSpells}/>
    </main>
  );
};