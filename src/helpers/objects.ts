export const isObjectEmpty = (obj: any) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export const isObjectEqual = (obj1: any, obj2: any) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
