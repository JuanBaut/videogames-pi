export const ORDER = "ORDER";

export const orderVideogames = (order) => {
  return { type: ORDER, payload: order };
};
