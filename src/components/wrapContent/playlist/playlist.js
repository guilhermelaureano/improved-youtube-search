import { Card } from 'flowbite-react';
import { memo } from 'react';
import useSearch from '@/hooks/useSearch';

function PlayListItem() {
  const { listItems, sortedListItems } = useSearch();

  if (!listItems) {
    return;
  }

  const renderItem = item => {
    const { channelTitle, description, duration, id, imgURL, title } = item;
    const url = `https://www.youtube.com/watch?v=${id}s`;
    return (
      <a key={id} href={url} target="_blank">
        <Card imgAlt={title} imgSrc={imgURL}>
          <h5 className="h-12 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="h-14 font-normal text-gray-700 dark:text-gray-400">
            <strong>{duration.time}</strong> - {description}
          </p>
          <p className="h-6 font-bold text-right text-gray-700 dark:text-gray-400">
            {channelTitle}
          </p>
        </Card>
      </a>
    );
  };

  const renderSortedListItems = () => {
    return sortedListItems.map((entry, key) => {
      return (
        <div key={key}>
          <h5 className="mx-8 mt-8 mb-16 text-xl font-semibold tracking-tight text-gray-700 dark:text-white">
            {entry.day.fullName}
          </h5>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mx-8 mt-4 mb-16">
            {entry.items.map(item => {
              return renderItem(item);
            })}
          </div>
        </div>
      );
    });
  };

  const renderListItems = () => {
    return (
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mx-8 my-4">
        {listItems.map(item => renderItem(item))}
      </div>
    );
  };

  return sortedListItems.length > 0
    ? renderSortedListItems()
    : renderListItems();
}

export default memo(PlayListItem);
