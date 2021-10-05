/**
 *
 * @param {string} titleStr
 * @returns
 */
export const slugify = (titleStr) =>
  titleStr
    .replace(/^\s+|\s+$/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
