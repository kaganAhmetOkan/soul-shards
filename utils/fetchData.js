export default async function fetchData(url) {
  const res = await fetch(url, { next: {revalidate: 60}});
  return await res.json();
};