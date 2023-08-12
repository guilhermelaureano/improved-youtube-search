import { useContext } from 'react';
import { UserContext } from '@/context/userContext';

function useUser() {
  const [state, setState] = useContext(UserContext);

  const handleTerm = value => {
    setState(prev => ({ ...prev, term: value }));
  };

  const handleTime = (day, value) => {
    setState(prev => ({ ...prev, [day]: value }));
  };

  return {
    handleTerm,
    handleTime,
    term: state.term,
    mon: state.mon,
    tue: state.tue,
    wed: state.wed,
    thu: state.thu,
    fri: state.fri,
    sat: state.sat,
    sun: state.sun,
    state,
  };
}

export default useUser;
