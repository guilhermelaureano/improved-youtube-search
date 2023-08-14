import { createContext, useState } from 'react';

const SearchContext = createContext([{}, () => {}]);

const SearchProvider = props => {
  const [entry, setEntry] = useState({
    data: [],
    descWords: [],
    enableListIDs: false,
    idList: [],
    loadingSearch: false,
    pageToken: '',
    term: '',
    titleWords: [],
    totalResults: 0,
    totalItems: 0,
  });
  return (
    <SearchContext.Provider value={[entry, setEntry]}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
