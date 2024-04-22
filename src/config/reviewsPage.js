export const paramReq = (page = 1) => {
  return {
    page,
    limit: 4,
    status: 'posted',
  };
};
