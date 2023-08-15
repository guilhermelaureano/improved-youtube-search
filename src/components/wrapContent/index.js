import useSearch from '@/hooks/useSearch';
import TimeDashboard from './dashboard/timeDashboard';
import Playlist from './playlist/playlist';
import PlayListSkeleton from './playlist/playlistSkeleton';
import Welcome from './welcome';

function WrapContent() {
  const { totalItems, loadingSearch } = useSearch();
  if (totalItems === 0) {
    return <Welcome />;
  }

  if (loadingSearch) {
    return <PlayListSkeleton />;
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-266px)] bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900">
      <div className="flex flex-col">
        <TimeDashboard />
        <Playlist />
      </div>
    </div>
  );
}

export default WrapContent;
