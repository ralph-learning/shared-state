const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

const basketReducer = (state, action) => {
  console.log('other')
};

export default function mainReducer({ user, basket }, action) {
  return {
    user: userReducer(user, action),
    basket: basketReducer(basket, action),
  };
}
