export const paramReq = (page = 1) => {
  return {
    page,
    limit: 5,
    status: 'posted',
  };
};
