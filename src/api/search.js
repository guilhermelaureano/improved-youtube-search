async function getSearch(term, page) {
  const pageToken = page ? `&pageToken=${page}` : '';
  //ToDo add path+apikey
  const url =
    'www.googleapis.com/youtube/v3/search?key=AIzaSyAnhypI2hF88C-CxMhbA8B4AbXAfhRnXB4';

  const res = await fetch(
    `https://${url}&q=${term}&type=video&part=snippet&order=relevance&maxResults=10${pageToken}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export { getSearch };
