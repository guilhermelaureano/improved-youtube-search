import { createContext, useState } from 'react';

const SearchContext = createContext([{}, () => {}]);

const SearchProvider = props => {
  const [entry, setEntry] = useState({
    descWords: [],
    enableListIDs: false,
    idList: [],
    itemsList: [],
    loadingSearch: false,
    pageToken: '',
    term: '',
    titleWords: [],
    totalItems: 0,
    totalResults: 0,
  });
  return (
    <SearchContext.Provider value={[entry, setEntry]}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
