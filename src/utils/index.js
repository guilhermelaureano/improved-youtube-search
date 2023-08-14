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

export function concatParameter(prev, items) {
  const { desc, id, title } = getParameter(items);

  const descWords = prev.descWords.concat(desc);
  const idList = prev.idList.concat(id);
  const titleWords = prev.titleWords.concat(title);

  return { descWords, idList, titleWords };
}
