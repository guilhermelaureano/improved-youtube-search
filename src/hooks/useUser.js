import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { handleTotalTimeSpent } from '@/utils';
import useSearch from './useSearch';

function useUser() {
  const [state, setState, initialState] = useContext(UserContext);
  const { listItems, handleSortedListItems } = useSearch();

  const week = [
    { id: 'mon', name: 'seg', fullName: 'Segunda-feira' },
    { id: 'tue', name: 'ter', fullName: 'Terça-feira' },
    { id: 'wed', name: 'qua', fullName: 'Quarta-feira' },
    { id: 'thu', name: 'qui', fullName: 'Quinta-feira' },
    { id: 'fri', name: 'sex', fullName: 'Sexta-feira' },
    { id: 'sat', name: 'sáb', fullName: 'Sábado' },
    { id: 'sun', name: 'dom', fullName: 'Domingo' },
  ];

  const handleDayTime = (id, time) => {
    const newTime = time && parseInt(time, 10);
    setState(prev => ({ ...prev, [id]: newTime }));
  };

  const handleTimeSpent = () => {
    const weekTime = week.map(day => {
      return { ...day, time: state[day.id] };
    });

    const { sortedListItems, timeSpentTotal } = handleTotalTimeSpent(
      weekTime,
      listItems,
    );

    if (sortedListItems && sortedListItems.length > 0) {
      setState(prev => ({ ...prev, timeSpentTotal: timeSpentTotal }));
      handleSortedListItems(sortedListItems);
    }
  };

  function handleClearState() {
    setState(initialState);
  }

  return {
    handleClearState,
    handleDayTime,
    handleTimeSpent,
    state,
    timeSpentTotal: state.timeSpentTotal,
    week,
  };
}

export default useUser;
