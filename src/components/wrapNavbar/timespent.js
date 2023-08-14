import { Button, TextInput, Tooltip } from 'flowbite-react';
import useUser from '@/hooks/useUser';

function TimeSpent() {
  const { handleTime, mon, tue, wed, thu, fri, sat, sun } = useUser();

  const renderInputDays = () => {
    const week = [
      { id: 'mon', name: 'seg', value: mon },
      { id: 'tue', name: 'ter', value: tue },
      { id: 'wed', name: 'qua', value: wed },
      { id: 'thu', name: 'qui', value: thu },
      { id: 'fri', name: 'sex', value: fri },
      { id: 'sat', name: 'sáb', value: sat },
      { id: 'sun', name: 'dom', value: sun },
    ];

    return week.map(entry => {
      const { id, name, value } = entry;
      return (
        <div key={name} className="flex items-center gap-2">
          <p className="text-sm dark:text-gray-50 text-gray-800">{name}</p>
          <TextInput
            className="w-16"
            id={name}
            min={0}
            onChange={e => handleTime(id, e.target.value)}
            sizing="sm"
            value={value}
            type="number"
          />
        </div>
      );
    });
  };

  return (
    <div className="md:flex-row items-center justify-center">
      <div className="flex items-center justify-center flex-col md:flex-row gap-4">
        <div className="border rounded-full border-gray-300 dark:border-gray-500 flex items-center justify-center flex-col md:flex-row gap-4 pl-4">
          <Tooltip
            placement="bottom"
            content="Adicione quanto tempo pretende gastar por dia da semana para assistir
              aos vídeos"
          >
            <p className="font-semibold text-lg dark:text-gray-50 text-gray-800">
              Organize sua playlist aqui!
            </p>
          </Tooltip>
          <div className="flex w-1/7 flex-col flex-wrap sm:flex-row items-center mx-auto gap-2">
            {renderInputDays()}
          </div>
          <Button
            pill
            className="ml-4"
            gradientDuoTone="pinkToOrange"
            size="sm"
            // onClick={clearState}
          >
            Organizar
          </Button>
        </div>
        <Button
          pill
          className="ml-4"
          gradientDuoTone="redToYellow"
          // onClick={clearState}
          size="sm"
        >
          Nova busca
        </Button>
      </div>
    </div>
  );
}

export default TimeSpent;
