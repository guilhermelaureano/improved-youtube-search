import TimeSpent from './timespent';
import TopTerms from './topTerms';

function TimeDashboard() {
  return (
    <div className="flex flex-wrap justify-around gap-4 p-6 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-row mx-8 my-4">
      <TopTerms />
      <TimeSpent />
    </div>
  );
}

export default TimeDashboard;
