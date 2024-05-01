export const paramReq = (page = 1, pageSize) => {
  return {
    page,
    limit: pageSize,
    status: 'posted',
    rating: 'all',
  };
};
