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
    return sortedListItems.map(item => {
      return renderItem(item);
    });
  };

  const renderListItems = () => {
    return listItems.map(item => {
      return renderItem(item);
    });
  };

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mx-8 my-4">
      {sortedListItems.length > 0 ? renderSortedListItems() : renderListItems()}
    </div>
  );
}

export default memo(PlayListItem);
