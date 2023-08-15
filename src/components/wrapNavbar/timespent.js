import { Button, TextInput, Tooltip } from 'flowbite-react';
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
            className="w-16"
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
    <div className="flex items-center justify-center flex-col md:flex-row">
      <Tooltip
        placement="bottom"
        content="Adicione quanto tempo pretende gastar por dia da semana para assistir
              aos vídeos"
      >
        <p className="mr-2 font-semibold text-lg dark:text-gray-50 text-gray-800">
          Organize sua playlist aqui!
        </p>
      </Tooltip>
      <div className="h-10 flex flex-col flex-wrap sm:flex-row items-center gap-2">
        {renderInputDays()}
      </div>
      <Button
        pill
        className="ml-4"
        gradientDuoTone="pinkToOrange"
        size="sm"
        onClick={handleOrganize}
      >
        Organizar
      </Button>
      <Button pill className="ml-4" onClick={handleNewSearch} size="sm">
        Nova busca
      </Button>
    </div>
  );
}

export default TimeSpent;
