import { useContext } from 'react';
import { getSearch } from '@/api/search';
import { SearchContext } from '@/context/searchContext';
// import { getParameter } from '@/utils';

function useSearch() {
  const [entry, setEntry] = useContext(SearchContext);

  async function search(term) {
    setEntry(prev => ({ ...prev, loadingSearch: true }));

    const result = await getSearch(term);
    console.log('🚀 ~ search ~ result:', result);

    // const { desc, id, title } = getParameter(result.items);

    // const newDesc = entry.descWords;
    // const newIDList = entry.idList;
    // const newTitleList = entry.titleWords;

    // newTitleList.push(title);
    // newDesc.push(desc);
    // newIDList.push(id);

    setEntry(prev => ({
      ...prev,
      result,
      // descWords: newDesc,
      // idList: newIDList,
      loadingSearch: false,
      // titleWords: newTitleList,
    }));
  }

  return {
    data: entry.result,
    loadingSearch: entry.loadingSearch,
    search,
  };
}

export default useSearch;
