/**
 *
 * @param  {...any} dispatches
 * @returns
 */
export const combineDispatch =
  (...dispatches) =>
  (action) =>
    dispatches.forEach((dispatch) => dispatch(action));

/**
 * @use const rootReducer = combineReducers({ a, b });
 * @param {*} slices
 * @returns
 */
export const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

/**
 * @use const rootReducer2 = reduceReducers(a, b);
 * @param  {...any} reducers
 * @returns
 */
const reduceReducers =
  (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);
