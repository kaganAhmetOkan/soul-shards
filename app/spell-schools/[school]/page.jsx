import { redirect } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import fetchData from "@/utils/fetchData";

export default async function SchoolPage({ params }) {
  const schools = ["purple", "black", "white", "grey", "green", "red"];
  
  if (!schools.includes(params.school)) {
    redirect("/spell-schools");
  };

  const spells = await fetchData(`http://localhost:3000/spells/${params.school}.json`);

  return (
    <main>
      <Hero color={params.school}>{`${params.school} School`}</Hero>
    </main>
  );
};