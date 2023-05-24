export const formatClass = (className: string): string => {
  return className.replace(/\s{2,}/g, " ").trim();
};
