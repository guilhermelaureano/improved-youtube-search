import useSearch from '@/hooks/useSearch';
import useUser from '@/hooks/useUser';
import { Button, TextInput } from 'flowbite-react';

function Form() {
  const { handleTerm, term } = useUser();
  const { search } = useSearch();

  const handleClick = () => {
    search(term);
  };

  return (
    <div className="w-3/5 flex flex-col md:flex-row items-center justify-center">
      <form className="w-full" onChange={e => handleTerm(e.target.value)}>
        <TextInput
          id="term"
          placeholder="Adicione um termo para buscar"
          type="text"
        />
      </form>
      <Button
        pill
        className="ml-4"
        gradientDuoTone="pinkToOrange"
        onClick={handleClick}
        size="sm"
      >
        Pesquisar
      </Button>
    </div>
  );
}

export default Form;
