export function getParameter(items) {
  const descList = [];
  const idList = [];
  const titleList = [];

  items.map(entry => {
    idList.push(entry.id.videoId);
    descList.push(entry.snippet.description);
    titleList.push(entry.snippet.title);
  });
  return { descList, idList, titleList };
}
