import { Button, TextInput } from 'flowbite-react';
import useSearch from '@/hooks/useSearch';

function Form() {
  const { handleTerm, search, term } = useSearch();

  return (
    <div className="w-3/5 flex flex-col md:flex-row items-center justify-center">
      <form className="w-full" onChange={e => handleTerm(e.target.value)}>
        <TextInput
          id="term"
          placeholder="Adicione um termo para buscar"
          type="text"
          defaultValue={term}
        />
      </form>
      <Button
        pill
        className="ml-4"
        gradientDuoTone="pinkToOrange"
        onClick={() => search()}
        size="sm"
      >
        Pesquisar
      </Button>
    </div>
  );
}

export default Form;
