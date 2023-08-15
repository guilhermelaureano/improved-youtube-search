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

  const resultData = prev.listItems.concat(result.items);
  const descList = prev.descWords.concat(desc);
  const idList = prev.idList.concat(id);
  const titleList = prev.titleWords.concat(title);
  const totalItems = prev.totalItems + result.pageInfo.resultsPerPage;

  return {
    descList,
    idList,
    resultData,
    titleList,
    totalItems,
  };
}

export function formatItems(listItems, contentDetailsList) {
  const newListItems = listItems.map(item => {
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

  return newListItems;
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

export function handleTotalTimeSpent(week, listItems) {
  const longerTimeItem = week.reduce(function (prev, current) {
    return prev.time > current.time ? prev : current;
  });
  const longerTime = longerTimeItem.time;

  if (longerTime === 0) {
    return { newListItems: [], timeSpentTotal: 0 };
  }

  const maxVideoTime = longerTime * 60;
  const newListItems = listItems.filter(
    item => item.duration.secondsAmount < maxVideoTime,
  );

  let secondsAmount = 0;
  for (const item of newListItems) {
    secondsAmount = secondsAmount + item.duration.secondsAmount;
  }

  const timeSpentTotal = moment
    .utc(1000 * secondsAmount)
    .format('HH[h] mm[m] ss[s]');

  return { newListItems, timeSpentTotal };
}

export function rankingTopFiveTerms(list) {
  const allTerms = [];
  const termsList = [];

  for (const value of list) {
    allTerms.push(...value.split(' '));
  }

  for (const value of allTerms) {
    if (termsList[value]) {
      termsList[value]++;
    } else {
      termsList[value] = 1;
    }
  }

  const orderTerms = [];
  for (const term in termsList) {
    orderTerms.push([term, termsList[term]]);
  }

  orderTerms.sort((a, b) => b[1] - a[1]);

  const topFiveTerms = [];

  for (const term of orderTerms) {
    if (topFiveTerms.length === 5) {
      break;
    }
    if (term[0].length > 2 && term[0] !== 'com' && term[0] !== '...') {
      topFiveTerms.push(term[0]);
    }
  }

  return topFiveTerms;
}
