export const createSlug = (str: string) => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // replace all non-alphanumeric, non-whitespace characters with a hyphen
  str = str.replace(/[^a-z0-9\s-]/g, '');
  // replace spaces and dashes with a single hyphen
  str = str.replace(/[\s-]+/g, '-');
  return str;
};
