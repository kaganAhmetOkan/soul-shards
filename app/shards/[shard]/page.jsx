import { redirect } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import Spells from "@/components/Spells/Spells";

export default async function ShardPage({ params }) {
  const shards = ["purple", "black", "white", "grey", "green", "red"];
  const shard = params.shard;

  if (!shards.includes(shard)) {
    redirect("/shards");
  };

  return (
    <main data-color={shard}>
      <Hero color={shard}>{`${shard} shard`}</Hero>
      <Spells school={shard} />
    </main>
  );
};