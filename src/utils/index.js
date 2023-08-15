import moment from 'moment';

export function getParameter(items) {
  const desc = [];
  const id = [];
  const title = [];

  items.forEach(entry => {
    id.push(entry.id.videoId);
    desc.push(entry.snippet.description);
    title.push(entry.snippet.title);
  });

  return { desc, id, title };
}

export function concatParameter(prev, result) {
  const { desc, id, title } = getParameter(result.items);

  const resultData = prev.itemsList.concat(result.items);
  const descWords = prev.descWords.concat(desc);
  const idList = prev.idList.concat(id);
  const titleWords = prev.titleWords.concat(title);
  const totalItems = prev.totalItems + result.pageInfo.resultsPerPage;

  return {
    descWords,
    idList,
    resultData,
    titleWords,
    totalItems,
  };
}

export function formatItems(itemsList, contentDetailsList) {
  const newItemsList = itemsList.map(item => {
    const newItem = {
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      id: item.id.videoId,
      title: item.snippet.title,
      imgURL: item.snippet.thumbnails.medium.url,
      imgURL: item.snippet.thumbnails.medium.url,
    };

    const content = contentDetailsList.find(
      content => content.id === item.id.videoId,
    );
    newItem.duration = content?.contentDetails
      ? formatTime(content.contentDetails.duration)
      : '';

    return newItem;
  });

  return newItemsList;
}

export function formatTime(duration) {
  const secondsAmount = moment.duration(duration).asSeconds();
  const minutes = Math.floor(secondsAmount / 60);
  const seconds = String(secondsAmount % 60).padStart(2, '0');
  return {
    time: `${minutes}:${seconds}`,
    secondsAmount,
  };
}
