import useSearch from '@/hooks/useSearch';
import { ListGroup } from 'flowbite-react';
import PlaylistItem from './playlistItem';

function Playlist() {
  const { data } = useSearch();

  if (!data) {
    return;
  }

  return (
    <div className="xl:max-w-4xl md:max-w-3xl max-w-xs m-8 mx-auto">
      <ListGroup className="w-full">
        {data.items.map(({ id, snippet }) => (
          <PlaylistItem key={id} item={{ id, snippet }} />
        ))}
      </ListGroup>
    </div>
  );
}

export default Playlist;
