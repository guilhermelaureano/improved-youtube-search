import { Button, TextInput } from 'flowbite-react';
import useUser from '@/hooks/useUser';
import useSearch from '@/hooks/useSearch';

function TimeSpent() {
  const { handleClearState, handleDayTime, handleTimeSpent, state, week } =
    useUser();
  const { handleClearEntry } = useSearch();

  const renderInputDays = () => {
    return week.map(entry => {
      const { id, name } = entry;
      return (
        <div key={name} className="flex items-center">
          <p className="mr-1 text-sm dark:text-gray-50 text-gray-800">{name}</p>
          <TextInput
            className="appearance-none w-11"
            id={name}
            min={0}
            onChange={e => handleDayTime(id, e.target.value)}
            sizing="sm"
            value={state[id]}
            type="number"
          />
        </div>
      );
    });
  };

  const handleNewSearch = () => {
    handleClearEntry();
    handleClearState();
  };

  const handleOrganize = () => {
    handleTimeSpent();
  };

  return (
    <div className="flex-grow flex items-center justify-center flex-col">
      <p className="mb-2 font-semibold text-lg dark:text-gray-50 text-gray-800">
        Organize sua playlist aqui!
      </p>
      <p className="mb-2 text-base dark:text-gray-50 text-gray-800">
        Adicione quanto tempo pretende gastar por dia da semana para assistir
        aos vídeos
      </p>

      <div className="h-10 flex flex-col flex-wrap sm:flex-row items-center gap-2">
        {renderInputDays()}
      </div>
      <div className="flex justify-center items-center gap-4 py-2">
        <Button
          pill
          className="px-6 mr-8"
          gradientDuoTone="pinkToOrange"
          onClick={handleOrganize}
        >
          Organizar
        </Button>
        <Button pill className="ml-8" onClick={handleNewSearch}>
          Nova busca
        </Button>
      </div>
    </div>
  );
}

export default TimeSpent;
