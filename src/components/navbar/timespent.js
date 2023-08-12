import { useState } from 'react';

function TimeSpent() {
  const [timeData, setTime] = useState([
    { day: 'Segunda', value: 0 },
    { day: 'Terça', value: 0 },
    { day: 'Quarta', value: 0 },
    { day: 'Quinta', value: 0 },
    { day: 'Sexta', value: 0 },
    { day: 'Sábado', value: 0 },
    { day: 'Domingo', value: 0 },
  ]);

  const handleTime = ({ day, value }) => {
    const newTimeData = timeData;
    const index = timeData.findIndex(entry => entry.day === day);
    newTimeData[index].value = value;
    setTime(newTimeData);
  };

  return (
    <>
      <p className="w-auto text-center text-xs md:w-80 md:text-sm">
        Adicione quanto tempo pretende gastar por dia da semana para assistir
        aos vídeos?
      </p>
      <div className="w-2/3 flex items-center mx-auto gap-2">
        {timeData.map((entry, key) => {
          return (
            <div key={key} className="flex w-1/7 flex-col items-center mx-auto">
              <p>{entry.day}</p>
              <input
                type="number"
                className="block w-14 text-slate-900 tex rounded-md px-2 py-2 text-sm font-medium"
                onChange={e =>
                  handleTime({ day: entry.day, value: e.target.value })
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TimeSpent;
