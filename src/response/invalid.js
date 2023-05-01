export const invalidData = (res, error) => {
  res.status(411).json({
    results: [],
    info: {
      code: 411,
      error
    }
  });
};
