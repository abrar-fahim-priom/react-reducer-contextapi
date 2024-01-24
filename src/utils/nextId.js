export const getNextId = (datas) => {
  let maxId = datas.reduce((prev, current) =>
    prev && prev.id > current.id ? prev.id : current.id
  );

  return maxId + 1;
};
