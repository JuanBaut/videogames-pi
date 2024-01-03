export const FILTER = "FILTER";

export const filterVideogames = (genres) => {
  return { type: FILTER, payload: genres };
};
