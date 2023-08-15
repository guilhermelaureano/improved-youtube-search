function Welcome() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-266px)] bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900">
      <div className="max-w-5xl mx-auto p-4 md:p-12 flex items-center justify-center">
        <div className="px-20 py-8 border-none rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400">
          <p className="font-semibold text-lg md:text-2xl lg:text-3xl text-slate-100 ">
            O que você gostaria de ver no YouTube?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
