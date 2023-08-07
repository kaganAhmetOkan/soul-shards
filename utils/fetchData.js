export default async function fetchData(url) {
  const res = await fetch(url);
  return await res.json();
};