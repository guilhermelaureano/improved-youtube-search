import { useContext } from 'react';
import { getSearch } from '@/pages/api/search';
import { SearchContext } from '@/context/searchContext';
import { concatParameter, formatItems, rankingTopFiveTerms } from '@/utils';
import { getListId } from '@/pages/api/listID';

function useSearch() {
  const [entry, setEntry, initialState] = useContext(SearchContext);
  const {
    descWords,
    listItems,
    loadingSearch,
    pageToken,
    term,
    sortedListItems,
    titleWords,
    totalItems,
  } = entry;

  async function search() {
    if (!term) {
      return;
    }

    setEntry(prev => ({ ...prev, loadingSearch: true }));
    const result = await getSearch(term, pageToken);
    const { descList, idList, resultData, titleList, totalItems } =
      concatParameter(entry, result);

    const resultListID = await getListId(idList);

    const newListItems = await formatItems(resultData, resultListID.items);

    const descWords = rankingTopFiveTerms(descList);
    const titleWords = rankingTopFiveTerms(titleList);

    await setEntry(prev => ({
      ...prev,
      listItems: newListItems,
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

  function handleSortedListItems(list) {
    setEntry(prev => ({ ...prev, sortedListItems: list }));
  }

  return {
    descWords,
    listItems,
    handleClearEntry,
    handleSortedListItems,
    handleTerm,
    loadingSearch,
    search,
    sortedListItems,
    term,
    titleWords,
    totalItems,
  };
}

export default useSearch;
