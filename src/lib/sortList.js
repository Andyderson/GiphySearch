export const ascending = (a, b) => {
  if (a.datetime > b.datetime) {
    return 1;
  }
  if (a.datetime === b.datetime) {
    return 0;
  }
  return -1;
};

export const descending = (a, b) => {
  if (a.datetime < b.datetime) {
    return 1;
  }
  if (a.datetime === b.datetime) {
    return 0;
  }
  return -1;
};
