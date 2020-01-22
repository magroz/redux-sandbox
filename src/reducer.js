import actionsType from "./actionsType";

const ins = {
  countShow: 0,
  text:'test',
};

const reducer = (state = ins, action) => {

  switch (action.type) {
    case actionsType.INC:
      return Object.assign({},state, {
        countShow: state.countShow + 1
      });

    case actionsType.DEC:
      return Object.assign({},state, {
        countShow: state.countShow - 1
      });

    case actionsType.RND:
      return Object.assign({},state, {
        countShow: state.countShow + action.payload
      });

    case actionsType.CHANGE:
      return Object.assign({},state, {
        text: action.text
      });

    default:
      return state;
  }
};

export default reducer;
