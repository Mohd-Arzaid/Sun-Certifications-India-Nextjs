export const itemMatchesSearchQuery = (item, searchQueryText) => {
  const normalizedSearchText = searchQueryText.toLowerCase().trim();
  if (!normalizedSearchText) return true;

  return item.title?.toLowerCase().includes(normalizedSearchText) ?? false;
};
