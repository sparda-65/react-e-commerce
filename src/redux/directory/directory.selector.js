import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectoeySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
