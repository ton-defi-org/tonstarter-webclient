
const getParamsFromUrl = (name: string) => {
  const query = new URLSearchParams(window.location.search);
  return query.get(name);
};



export { getParamsFromUrl };
