export default function sortSpells(spells, sortMethod="") {
  switch (sortMethod) {
    case "az":
      spells.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "za":
      spells.sort((a, b) => a.name.localeCompare(b.name) * -1);
      break;
    default:
      spells.sort((a, b) => {
        let aCost = 0;
        let bCost = 0;

        a.base_cost.forEach(cost => aCost += Number.parseInt(cost.amount));
        b.base_cost.forEach(cost => bCost += Number.parseInt(cost.amount));

        if (a.cantrip && !b.cantrip) return -1;
        if (!a.cantrip && b.cantrip) return 1;
        if (aCost > bCost) return 1;
        if (aCost < bCost) return -1;
        return a.name.localeCompare(b.name);
      });
      break;
  };

  return spells;
};