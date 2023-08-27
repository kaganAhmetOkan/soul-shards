import AddSpell from "@/components/AddSpell/AddSpell";

export default function AddSpellPage({ searchParams }) {
  const { sid } = searchParams;
  
  return (
    <main>
      <AddSpell sid={sid} />
    </main>
  );
};