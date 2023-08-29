export default function calculateTier(spell) {
  let tier = 0;

  spell.base_cost.forEach(cost => {
    tier += Number.parseInt(cost.amount);
  });

  return tier;
};