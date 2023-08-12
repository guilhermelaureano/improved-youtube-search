import { createContext, useState } from 'react';

const UserContext = createContext([{}, () => {}]);

const UserProvider = props => {
  const [state, setState] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    term: '',
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
