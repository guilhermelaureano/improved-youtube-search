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
  const descriptionWords = prev.descriptionWords.concat(desc);
  const idList = prev.idList.concat(id);
  const titleWords = prev.titleWords.concat(title);
  const totalItems = prev.totalItems + result.pageInfo.resultsPerPage;

  return {
    descriptionWords,
    idList,
    resultData,
    titleWords,
    totalItems,
  };
}

export function formatItems(listItems, contentDetailsList) {
  const newListItems = listItems.map(item => {
    let newItem;
    if (item.snippet) {
      newItem = {
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        id: item.id.videoId,
        title: item.snippet.title,
        imgURL: item.snippet.thumbnails.medium.url,
        imgURL: item.snippet.thumbnails.medium.url,
      };
    } else {
      newItem = item;
    }

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
    alert('Adiciona minutos em ao menos um dia.');
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

  const sortedListItems = generateSortedListItems(week, newListItems);

  return { sortedListItems, timeSpentTotal };
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

export function generateSortedListItems(
  week,
  newListItems,
  sortedListItems = [],
) {
  let listControl = newListItems;

  for (const day of week) {
    let items = [];
    if (day.time > 0) {
      const dayTimeSeconds = day.time * 60;
      let count = dayTimeSeconds;

      for (const item of listControl) {
        if (count >= item.duration.secondsAmount) {
          count -= item.duration.secondsAmount;
          const itemToPush = listControl.shift();
          items.push(itemToPush);
        } else {
          break;
        }
      }

      if (items.length > 0) {
        sortedListItems.push({
          day: day,
          items,
        });
      }
    }
  }

  if (listControl.length > 0) {
    sortedListItems = generateSortedListItems(
      week,
      listControl,
      sortedListItems,
    );
  }
  return sortedListItems;
}
