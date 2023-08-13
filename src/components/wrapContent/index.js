import WrapPlaylist from './wrapPlaylist';

function WrapContent() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-266px)] bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900">
      <WrapPlaylist />
    </div>
  );
}

export default WrapContent;
