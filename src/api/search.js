async function getSearch(term, page) {
  const pageToken = page ? `&pageToken=${page}` : '';
  //ToDo add path+apikey
  const url = '';

  const res = await fetch(
    `https://${url}&q=${term}&type=video&part=snippet&order=relevance&maxResults=10${pageToken}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export { getSearch };
