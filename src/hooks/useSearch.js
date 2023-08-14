import { useContext } from 'react';
import { getSearch } from '@/api/search';
import { SearchContext } from '@/context/searchContext';
import { concatParameter } from '@/utils';

function useSearch() {
  const [entry, setEntry] = useContext(SearchContext);

  const { data, loadingSearch, result } = entry;

  async function search(term, page = '') {
    if (!term) {
      return;
    }

    setEntry(prev => ({ ...prev, loadingSearch: true }));

    const response = await getSearch(term, page);

    await setEntry(prev => {
      const dataResp = prev.idList.concat(response.items);
      const { descWords, idList, titleWords } = concatParameter(
        prev,
        response.items,
      );
      return {
        ...prev,
        data: dataResp,
        descWords,
        idList,
        loadingSearch: false,
        result,
        titleWords,
      };
    });
  }

  return {
    data,
    loadingSearch,
    search,
  };
}

export default useSearch;
