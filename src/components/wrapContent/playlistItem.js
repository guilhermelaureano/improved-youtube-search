import { ListGroup } from 'flowbite-react';
import Image from 'next/image';
import { memo } from 'react';

function PlayListItem({ item }) {
  const { snippet, videoId } = item;
  const url = `https://www.youtube.com/watch?v=${videoId}s`;
  return (
    <ListGroup.Item className="w-full flex flex-col sm:flex-row" key={videoId}>
      <a href={url} target="_blank">
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <Image
            alt={snippet.title}
            src={snippet.thumbnails.default.url}
            width="120"
            height="90"
          />
          <div>
            <p className="text-left text-xs md:text-lg">{snippet.title}</p>
          </div>
        </div>
      </a>
    </ListGroup.Item>
  );
}

export default memo(PlayListItem);
