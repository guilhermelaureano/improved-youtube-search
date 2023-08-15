import { createContext, useState } from 'react';

const SearchContext = createContext([{}, () => {}]);

const SearchProvider = props => {
  const initialState = {
    descriptionWords: [],
    idList: [],
    listItems: [],
    loadingSearch: false,
    pageToken: '',
    sortedListItems: [],
    term: '',
    titleWords: [],
    totalItems: 0,
    totalResults: 0,
  };
  const [entry, setEntry] = useState(initialState);
  return (
    <SearchContext.Provider value={[entry, setEntry, initialState]}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
