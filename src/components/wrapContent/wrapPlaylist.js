import useSearch from '@/hooks/useSearch';
import Playlist from './playlist';
import PlayListSkeleton from './playlistSkeleton';

function WrapPlaylist() {
  const { data, loadingSearch } = useSearch();

  if (!data?.items && !loadingSearch) {
    return (
      <div className="max-w-5xl mx-auto p-4 md:p-12 flex items-center justify-center">
        <div className="px-24 py-16 border-none rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400">
          <p className="font-semibold text-lg md:text-2xl lg:text-3xl text-slate-800 dark:text-slate-100">
            O que você gostaria de ver no YouTube?
          </p>
        </div>
      </div>
    );
  }

  if (loadingSearch) {
    return <PlayListSkeleton />;
  }

  return <Playlist />;
}

export default WrapPlaylist;
