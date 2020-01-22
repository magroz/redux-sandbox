import actionsType from "./actionsType";

export const change = (inputValue) => {
  return {
    type: actionsType.CHANGE,
    text: inputValue,
  }};
export const inc = () => ({type: actionsType.INC});
export const dec = () => ({type: actionsType.DEC});
export const rnd = () => {
  return {
    type: actionsType.RND,
    payload: Math.floor(Math.random() * 10),
  };
};
