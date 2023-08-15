import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { handleTotalTimeSpent } from '@/utils';
import useSearch from './useSearch';

function useUser() {
  const [state, setState, initialState] = useContext(UserContext);
  const { itemsList } = useSearch();

  const week = [
    { id: 'mon', name: 'seg' },
    { id: 'tue', name: 'ter' },
    { id: 'wed', name: 'qua' },
    { id: 'thu', name: 'qui' },
    { id: 'fri', name: 'sex' },
    { id: 'sat', name: 'sáb' },
    { id: 'sun', name: 'dom' },
  ];

  const handleDayTime = (id, time) => {
    const newTime = time && parseInt(time, 10);
    setState(prev => ({ ...prev, [id]: newTime }));
  };

  const handleTimeSpent = () => {
    const weekTime = week.map(day => {
      return { ...day, time: state[day.id] };
    });
    handleTotalTimeSpent(weekTime, itemsList);
  };

  function handleClearState() {
    setState(initialState);
  }

  return {
    handleClearState,
    handleDayTime,
    handleTimeSpent,
    state,
    week,
  };
}

export default useUser;
