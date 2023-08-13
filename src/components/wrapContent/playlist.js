import useSearch from '@/hooks/useSearch';
import { ListGroup } from 'flowbite-react';
import PlaylistItem from './playlistItem';
import PlayListSkeleton from './playlistSkeleton';

function Playlist() {
  const { data, loadingSearch } = useSearch();

  if (!data?.items && !loadingSearch) {
    return (
      <div className="min-h-screen max-w-5xl mx-auto p-4 md:p-12 space-y-8 flex items-center justify-center">
        <div className="mb-40 px-24 py-16 border-none rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400">
          <p className="font-semibold text-lg sm:text-2x1 md:text-2xl lg:text-4xl text-slate-800 dark:text-slate-100">
            O que você gostaria de ver no YouTube?
          </p>
        </div>
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
