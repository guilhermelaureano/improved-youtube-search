import { createContext, useState } from 'react';

const UserContext = createContext([{}, () => {}]);

const UserProvider = props => {
  const initialState = {
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  };
  const [state, setState] = useState(initialState);
  return (
    <UserContext.Provider value={[state, setState, initialState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
