import axios from 'axios';

async function getSearch(term, page = '') {
  const url = process.env.NEXT_PUBLIC_URL_YOUTUBE_API_SEARCH;
  const params = {
    key: process.env.NEXT_PUBLIC_API_KEY,
    maxResults: 50,
    order: 'relevance',
    part: 'snippet',
    q: term,
    type: 'video',
    pageToken: page,
  };

  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (e) {
    throw new Error('Failed to fetch data getSearch', e);
  }
}

export { getSearch };
