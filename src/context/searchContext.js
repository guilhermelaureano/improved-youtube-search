import { createContext, useState } from 'react';

const SearchContext = createContext([{}, () => {}]);

const SearchProvider = props => {
  const [entry, setEntry] = useState({
    data: {},
    descWords: [],
    idList: [],
    loadingSearch: false,
    titleWords: [],
  });
  return (
    <SearchContext.Provider value={[entry, setEntry]}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
