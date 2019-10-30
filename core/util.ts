// transform the http query & params
export const filterObject = (o: any, filter: any) => {
  const r: any = {};
  Object.keys(o).forEach((k: any) => {
    if (filter(o[k], k)) {
      r[k] = o[k];
    }
  });
  return r;
};