// Actions

const CHECK_STATUS = 'CHECK_STATUS';

// Reducer

export default function categoriesReducer(state = [], action = {}) {
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
