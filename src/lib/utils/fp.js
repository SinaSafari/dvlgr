/**
 *
 * @param  {...any} fns
 * @returns
 */
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

/**
 *
 * @param  {...any} fns
 * @returns
 */
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
