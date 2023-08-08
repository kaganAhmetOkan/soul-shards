import { redirect } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import fetchData from "@/utils/fetchData";

export default async function SchoolPage({ params }) {
  const schools = ["purple", "black", "white", "grey", "green", "red"];
  const localhost = process.env.LOCALHOST;

  if (!schools.includes(params.school)) {
    redirect("/spell-schools");
  };

  const spells = await fetchData(`${localhost}/spells/${params.school}.json`);
  console.log(spells);

  return (
    <main>
      <Hero color={params.school}>{`${params.school} School`}</Hero>
    </main>
  );
};