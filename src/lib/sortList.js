export const ascending = (a, b) => {
  if (a.upload > b.upload) {
    return 1;
  } else if (a.upload === b.upload) {
    return 0;
  } else {
    return -1;
  }
};

export const descending = (a, b) => {
  if (a.upload < b.upload) {
    return 1;
  } else if (a.upload === b.upload) {
    return 0;
  } else {
    return -1;
  }
};
