export const buildFilterQueryParams = (filters: Filters) => {
  const { platform, sort, category } = filters;
  let paramsString = `?platform=${platform}&sort-by=${sort}`;

  if (category && category !== 'all') {
    paramsString += `&category=${category}`;
  }

  return paramsString;
};
