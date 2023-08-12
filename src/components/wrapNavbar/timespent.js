import { useState } from 'react';
import { Dropdown, Label, Navbar, TextInput } from 'flowbite-react';

function TimeSpent() {
  const [mon, setMon] = useState(0);
  const [tue, setTue] = useState(0);
  const [wed, setWed] = useState(0);
  const [thu, setThu] = useState(0);
  const [fri, setFri] = useState(0);
  const [sat, setSat] = useState(0);
  const [sun, setSun] = useState(0);

  const renderInputDays = () => {
    const week = [
      { name: 'seg', handleInput: setMon, value: mon },
      { name: 'ter', handleInput: setTue, value: tue },
      { name: 'qua', handleInput: setWed, value: wed },
      { name: 'qui', handleInput: setThu, value: thu },
      { name: 'sex', handleInput: setFri, value: fri },
      { name: 'sáb', handleInput: setSat, value: sat },
      { name: 'dom', handleInput: setSun, value: sun },
    ];

    return week.map(entry => {
      const { handleInput, name, value } = entry;
      return (
        <div key={name} className="flex flex-col items-center">
          <Label value={name} />
          <TextInput
            className="w-14"
            id={name}
            min={0}
            onChange={e => handleInput(e.target.value)}
            sizing="sm"
            value={value}
            type="number"
          />
        </div>
      );
    });
  };

  return (
    <div className="flex md:order-2">
      <Dropdown
        dismissOnClick={false}
        setButtonWidth={60}
        inline
        label={'Organize sua playlist aqui!'}
      >
        <Dropdown.Header>
          <span className="block truncate text-sm font-medium">
            Adicione quanto tempo pretende gastar por dia da semana para
            assistir aos vídeos.
          </span>
        </Dropdown.Header>
        <div className="flex items-center justify-center flex-col md:flex-row gap-2">
          <div className="flex w-1/7 flex-col sm:flex-row items-center mx-auto gap-2 p-2">
            {renderInputDays()}
          </div>
          <Navbar.Toggle />
        </div>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
}

export default TimeSpent;
