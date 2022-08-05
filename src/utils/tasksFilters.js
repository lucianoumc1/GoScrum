export const filterByTitle = (list, title) => {
  const listFiltered = list.filter((item) =>
    item?.title.toLowerCase().includes(title.toLowerCase())
  );
  return listFiltered;
};

export const filterByImportance = (list, importance) => {
  const listFiltered = list.filter((item) => item?.importance === importance);
  return listFiltered;
};
