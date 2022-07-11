// Actions

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

// Reducer

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action creators

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
