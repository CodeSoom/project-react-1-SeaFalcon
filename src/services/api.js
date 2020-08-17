export default async function fetchAlbums({ year, page, limit } = {}) {
  const url = `http://localhost:3000/albumoftheyear?year=${year}&page=${page}&limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}