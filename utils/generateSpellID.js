export default function generateSpellID(spellName) {
  let id = spellName.trim();
  id = id.replaceAll(" ", "_");
  return id.toLowerCase();
}