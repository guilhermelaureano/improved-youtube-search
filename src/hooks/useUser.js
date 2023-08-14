import { useContext } from 'react';
import { UserContext } from '@/context/userContext';

function useUser() {
  const [state, setState] = useContext(UserContext);

  const handleTerm = value => {
    setState(prev => ({ ...prev, term: value }));
  };

  const handleTime = (day, value) => {
    const newValue = value && parseInt(value, 10);
    setState(prev => ({ ...prev, [day]: newValue }));
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
  };
}

export default useUser;
