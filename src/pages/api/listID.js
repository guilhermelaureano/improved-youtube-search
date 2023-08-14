async function getListId(listID) {
  const url = new URL(process.env.NEXT_PUBLIC_URL_YOUTUBE_API_VIDEOS);
  const params = {
    key: process.env.NEXT_PUBLIC_API_KEY,
    part: 'contentDetails',
    id: listID,
    maxResults: 50,
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export { getListId };
