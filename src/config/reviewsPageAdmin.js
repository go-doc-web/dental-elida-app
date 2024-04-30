export const paramReqAdmin = (page = 1) => {
  return {
    page,
    limit: 10,
  };
};
