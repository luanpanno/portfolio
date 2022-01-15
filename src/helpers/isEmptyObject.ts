// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmptyObject(obj: any) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}
