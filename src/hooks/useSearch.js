import { useContext, useEffect } from 'react';
import { getSearch } from '@/pages/api/search';
import { SearchContext } from '@/context/searchContext';
import { concatParameter, formatItems, rankingTopFiveTerms } from '@/utils';
import { getListId } from '@/pages/api/listID';

function useSearch() {
  const [entry, setEntry, initialState] = useContext(SearchContext);

  const { descriptionWords, loadingSearch, titleWords } = entry;
  useEffect(() => {
    if (!loadingSearch && descriptionWords.length && titleWords.length) {
      const topDescriptionWords = rankingTopFiveTerms(descriptionWords);
      const toptitleWords = rankingTopFiveTerms(titleWords);
      setEntry({
        ...entry,
        descriptionWords: topDescriptionWords,
        titleWords: toptitleWords,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingSearch]);

  async function search() {
    if (!entry.term) {
      alert('Adicione um termo para buscar');
      return;
    }

    setEntry(prev => ({ ...prev, loadingSearch: true }));
    const maxItems = 200;
    let itemsAmount = 0;
    let token = '';
    let localState = { ...initialState, loadingSearch: true };

    while (itemsAmount < maxItems) {
      const result = await getSearch(entry.term, token);
      const { descriptionWords, idList, resultData, titleWords, totalItems } =
        concatParameter(localState, result);

      const resultListID = await getListId(idList);
      const newListItems = await formatItems(resultData, resultListID.items);

      const nextPageToken = result.nextPageToken ?? '';
      const totalResults = result.pageInfo.totalResults ?? 0;
      itemsAmount += result.pageInfo.resultsPerPage;
      token = nextPageToken;
      localState = {
        ...localState,
        listItems: newListItems,
        descriptionWords,
        idList,
        loadingSearch: true,
        pageToken: nextPageToken,
        titleWords,
        totalItems,
        totalResults,
      };

      if (itemsAmount >= totalResults || itemsAmount >= maxItems) {
        setEntry(prev => {
          return {
            ...prev,
            listItems: newListItems,
            descriptionWords,
            idList,
            loadingSearch: false,
            pageToken: nextPageToken,
            titleWords,
            totalItems,
            totalResults,
          };
        });
        break;
      }
    }
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
    descriptionWords: entry.descriptionWords,
    listItems: entry.listItems,
    loadingSearch: entry.loadingSearch,
    sortedListItems: entry.sortedListItems,
    term: entry.term,
    titleWords: entry.titleWords,
    totalItems: entry.totalItems,
    handleClearEntry,
    handleSortedListItems,
    handleTerm,
    search,
  };
}

export default useSearch;
