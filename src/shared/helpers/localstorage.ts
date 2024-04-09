export const setLocalStorage = <T>(key: string, obj: T) => {
  window.localStorage.setItem(key, JSON.stringify(obj));
};
export const getLocalStorage = <T>(key: string): T | null => {
  const value = window.localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

export const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
