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

  const data = prev.data.concat(result.items);
  const descWords = prev.descWords.concat(desc);
  const idList = prev.idList.concat(id);
  const titleWords = prev.titleWords.concat(title);

  const pageToken = result.nextPageToken && '';
  const totalItems = prev.totalItems + result.pageInfo.resultsPerPage;
  const totalResults = result.pageInfo.totalResults;

  return {
    data,
    descWords,
    idList,
    pageToken,
    titleWords,
    totalItems,
    totalResults,
  };
}
