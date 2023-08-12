import Playlist from './playlist';

function WrapContent() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900">
      <Playlist />
    </div>
  );
}

export default WrapContent;
