// Actions

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

// Reducer

// Console log for checking that "check status" button works
// as it has no functionality yet

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      console.log('Under construction');
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
