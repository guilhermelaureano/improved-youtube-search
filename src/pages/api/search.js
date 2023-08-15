async function getSearch(term, page = '') {
  const url = new URL(process.env.NEXT_PUBLIC_URL_YOUTUBE_API_SEARCH);

  const params = {
    key: process.env.NEXT_PUBLIC_API_KEY,
    maxResults: 50,
    order: 'relevance',
    part: 'snippet',
    q: term,
    type: 'video',
    pageToken: page,
  };

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export { getSearch };
