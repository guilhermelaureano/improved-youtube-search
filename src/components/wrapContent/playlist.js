import useSearch from '@/hooks/useSearch';
import { Card } from 'flowbite-react';
import { memo } from 'react';

function PlayListItem() {
  const { data } = useSearch();

  if (!data) {
    return;
  }

  const renderItem = item => {
    const {
      id: { videoId },
      snippet: {
        channelTitle,
        description,
        title,
        thumbnails: { medium },
      },
    } = item;

    const url = `https://www.youtube.com/watch?v=${videoId}s`;

    return (
      <a key={videoId} href={url} target="_blank">
        <Card imgAlt={title} imgSrc={medium.url}>
          <h5 className="h-12 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="h-14 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="h-6 font-bold text-right text-gray-700 dark:text-gray-400">
            {channelTitle}
          </p>
        </Card>
      </a>
    );
  };

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mx-8 my-4">
      {data.map(item => {
        return renderItem(item);
      })}
    </div>
  );
}

export default memo(PlayListItem);
