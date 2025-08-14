export const removeEmptyFields = (
  obj: Record<string, any>
): Record<string, any> => {
  return Object.keys(obj).reduce<Record<string, any>>((acc, key) => {
    if (obj[key] !== undefined && obj[key] !== 'undefined') {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
