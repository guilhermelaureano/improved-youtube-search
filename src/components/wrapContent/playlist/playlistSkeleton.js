import { Card } from 'flowbite-react';

function PlayListSkeleton() {
  const renderItem = () => {
    return (
      <Card>
        <div className="bg-gray-300 rounded md:w-96 h-44 w-full" />
        <h5 className="h-12 bg-gray-200 rounded-md w-48 mb-4"></h5>
        <p className="h-14 bg-gray-200 rounded-md max-w-[480px] mb-2.5"></p>
        <p className="h-6 bg-gray-200 rounded-sm max-w-[480px] mb-2.5"></p>
      </Card>
    );
  };
  return (
    <div className="animate-pulse grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mx-8 my-4">
      {renderItem()}
      {renderItem()}
      {renderItem()}
      {renderItem()}
      {renderItem()}
      {renderItem()}
    </div>
  );
}

export default PlayListSkeleton;
