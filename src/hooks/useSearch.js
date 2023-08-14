import { useContext } from 'react';
import { getSearch } from '@/pages/api/search';
import { SearchContext } from '@/context/searchContext';
import { concatParameter } from '@/utils';

function useSearch() {
  const [entry, setEntry] = useContext(SearchContext);

  const { data, loadingSearch, term, pageToken } = entry;

  async function search() {
    if (!term) {
      return;
    }

    setEntry(prev => ({ ...prev, loadingSearch: true }));
    const response = await getSearch(term, pageToken);
    await setEntry(prev => {
      const params = concatParameter(prev, response);
      return {
        ...prev,
        ...params,
        loadingSearch: false,
      };
    });
  }

  const handleTerm = value => {
    setEntry(prev => ({ ...prev, term: value }));
  };

  return {
    data,
    handleTerm,
    loadingSearch,
    search,
    term,
  };
}

export default useSearch;
