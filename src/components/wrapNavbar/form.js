import useSearch from '@/hooks/useSearch';
import { Button, TextInput } from 'flowbite-react';

function Form() {
  const { handleTerm, term, search } = useSearch();

  return (
    <div className="w-3/5 flex flex-col md:flex-row items-center justify-center">
      <form className="w-full" onChange={e => handleTerm(e.target.value)}>
        <TextInput id="term" placeholder="Pesquisar" type="text" />
      </form>
      <Button
        pill
        className="ml-4"
        gradientDuoTone="pinkToOrange"
        onClick={search}
        size="sm"
      >
        search
      </Button>
    </div>
  );
}

export default Form;
