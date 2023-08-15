import axios from 'axios';
import qs from 'qs';

async function getListId(listID) {
  const url = process.env.NEXT_PUBLIC_URL_YOUTUBE_API_VIDEOS;
  try {
    const { data } = await axios.get(url, {
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
        part: 'contentDetails',
        id: listID,
        maxResults: 50,
      },
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return data;
  } catch (e) {
    throw new Error('Failed to fetch data getListId', e);
  }
}

export { getListId };
