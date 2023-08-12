import useSearch from '@/hooks/useSearch';
import { ListGroup } from 'flowbite-react';
import Image from 'next/image';

function Playlist() {
  const { data } = useSearch();

  if (!data) {
    return;
  }

  return (
    <div className="xl:max-w-4xl md:max-w-3xl max-w-xs m-8 mx-auto">
      <ListGroup className="w-full">
        {data.items.map(({ id: videoId, snippet }) => {
          const url = `https://www.youtube.com/watch?v=${videoId}s`;
          return (
            <ListGroup.Item
              className="w-full flex flex-col sm:flex-row"
              key={videoId}
            >
              <a href={url} target="_blank">
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <Image
                    alt={snippet.title}
                    src={snippet.thumbnails.default.url}
                    width="120"
                    height="90"
                  />
                  <div>
                    <p className="text-left text-xs md:text-lg">
                      {snippet.title}
                    </p>
                  </div>
                </div>
              </a>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Playlist;
