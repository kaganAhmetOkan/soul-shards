import { redirect } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import fetchData from "@/utils/fetchData";

export default async function ShardPage({ params }) {
  const shards = ["purple", "black", "white", "grey", "green", "red"];
  const localhost = process.env.LOCALHOST;

  if (!shards.includes(params.shard)) {
    redirect("/shards");
  };

  const spells = await fetchData(`${localhost}/json/spells.json`);

  return (
    <main>
      <Hero color={params.shard}>{`${params.shard} shard`}</Hero>
    </main>
  );
};