export default {
  rows: () => getPlacements.data?.data?.data || [],
  hasError: () =>
    !getPlacements.isLoading &&
    (
      getPlacements.responseMeta?.isExecutionSuccess === false ||
      getPlacements.data?.responseMeta?.status >= 400 ||
      getPlacements.data?.data?.ok === false
    ),
  isEmpty: () =>
    !getPlacements.isLoading &&
    !PlacementsPageJS.hasError() &&
    PlacementsPageJS.rows().length === 0,
};
