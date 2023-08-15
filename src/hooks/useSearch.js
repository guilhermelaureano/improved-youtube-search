import { useContext } from 'react';
import { getSearch } from '@/pages/api/search';
import { SearchContext } from '@/context/searchContext';
import { concatParameter, formatItems } from '@/utils';
import { getListId } from '@/pages/api/listID';

function useSearch() {
  const [entry, setEntry, initialState] = useContext(SearchContext);
  const { itemsList, loadingSearch, term, pageToken, totalItems } = entry;

  async function search() {
    if (!term) {
      return;
    }

    setEntry(prev => ({ ...prev, loadingSearch: true }));
    const result = await getSearch(term, pageToken);
    const { descWords, idList, resultData, titleWords, totalItems } =
      concatParameter(entry, result);

    const resultListID = await getListId(idList);

    const newItemsList = await formatItems(resultData, resultListID.items);

    await setEntry(prev => ({
      ...prev,
      itemsList: newItemsList,
      descWords,
      idList,
      loadingSearch: false,
      pageToken: result.nextPageToken && '',
      titleWords,
      totalItems,
      totalResults: result.pageInfo.totalResults,
    }));
  }

  const handleTerm = value => {
    setEntry(prev => ({ ...prev, term: value }));
  };

  function handleClearEntry() {
    setEntry(initialState);
  }

  return {
    itemsList,
    handleClearEntry,
    handleTerm,
    loadingSearch,
    search,
    term,
    totalItems,
  };
}

export default useSearch;
