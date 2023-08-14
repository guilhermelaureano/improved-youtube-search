import { useContext } from 'react';
import { UserContext } from '@/context/userContext';

function useUser() {
  const [state, setState] = useContext(UserContext);

  const handleTime = (day, value) => {
    const newValue = value && parseInt(value, 10);
    setState(prev => ({ ...prev, [day]: newValue }));
  };

  return {
    handleTime,
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
