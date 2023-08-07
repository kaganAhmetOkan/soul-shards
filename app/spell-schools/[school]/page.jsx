import { redirect } from "next/navigation";
import Hero from "@/components/Hero/Hero";

export default function SchoolPage({ params }) {
  const schools = ["purple", "black", "white", "grey", "green", "red"];

  if (!schools.includes(params.school)) {
    redirect("/spell-schools");
  };

  return (
    <main>
      <Hero color={params.school}>{`${params.school} School`}</Hero>
    </main>
  );
};