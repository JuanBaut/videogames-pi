import { createSelector } from "reselect";

export const selectVisibleVideogames = createSelector(
  (state) => state.videogames,
  (state) => state.currentPage,
  (state) => state.itemsPerPage,
  (videogames, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    return videogames.slice(startIndex, endIndex);
  },
);
