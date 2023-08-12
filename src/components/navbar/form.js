import { useState } from 'react';

function Form() {
  const [term, setTerm] = useState('');

  const handleClick = () => {
    console.log('term: ', term);
  };

  return (
    <div className="w-1/2 flex flex-wrap items-center mx-auto">
      <input
        className=" block w-3/4 text-slate-900 tex rounded-md px-3 py-2 text-sm font-medium"
        placeholder="adicione um termo"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button
        className="bg-slate-400 rounded-md px-3 py-2 text-sm font-medium"
        onClick={handleClick}
      >
        search
      </button>
    </div>
  );
}

export default Form;
