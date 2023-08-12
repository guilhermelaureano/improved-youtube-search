import useSearch from '@/hooks/useSearch';
import { ListGroup } from 'flowbite-react';
import PlaylistItem from './playlistItem';
import PlayListSkeleton from './playlistSkeleton';

function Playlist() {
  const { data, loadingSearch } = useSearch();

  if (!data?.items && !loadingSearch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-semibold text-2x1 sm:text-3x1 md:text-4xl lg:text-5xl text-slate-800 dark:text-slate-100">
          O que você gostaria de ver no YouTube?
        </p>
      </div>
    );
  }

  if (loadingSearch) {
    return (
      <div className="min-h-screen max-w-5xl mx-auto p-4 md:p-12 space-y-8">
        <PlayListSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-4 md:p-12 space-y-8">
      <ListGroup className="w-full">
        {data.items?.map(({ id, snippet }) => (
          <PlaylistItem key={id.videoId} id={id.videoId} snippet={snippet} />
        ))}
      </ListGroup>
    </div>
  );
}

export default Playlist;
