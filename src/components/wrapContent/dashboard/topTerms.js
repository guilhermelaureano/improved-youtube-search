import { Label } from 'flowbite-react';
import useSearch from '@/hooks/useSearch';

function TopTerms() {
  const { descWords, titleWords } = useSearch();
  const renderTerms = (title, words) => {
    return (
      <div className="w-fit">
        <Label className="text-base">{title}</Label>
        <div className="flex flex-row items-baseline gap-4 w-fit">
          {words.map((word, key) => {
            return (
              <Label className="text-base font-thin" key={key}>
                {word}
              </Label>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-grow-0">
      <Label className="text-lg font-semibold">Resultado da busca</Label>
      {renderTerms('Top 5 termos nos títulos', titleWords)}
      {renderTerms('Top 5 termos nas descrições', descWords)}
    </div>
  );
}

export default TopTerms;
