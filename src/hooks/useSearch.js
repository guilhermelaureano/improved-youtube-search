import Mock from '@/mock';
import { useState } from 'react';

function useSearch() {
  const [term, setTerm] = useState('');
  console.log('🚀 ~ useSearch ~ term:', term);
  const [data, setData] = useState(Mock);

  const handleTerm = term => {
    if (term) {
      setTerm(term);
    }
  };

  async function search() {
    // const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhUfZ82mWKToSoLvHb9c5M0RnxtAihpFk&q=${term}&type=video&part=snippet&order=relevance`;
    // const res = await fetch(url);
    // if (!res.ok) {
    //   throw new Error('Failed to fetch data');
    // }
    // setData(res.json());
  }

  function selectVideo() {}

  return {
    data,
    handleTerm,
    search,
    selectVideo,
    term,
  };
}

export default useSearch;
