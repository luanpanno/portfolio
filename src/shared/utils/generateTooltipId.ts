export function generateTooltipId(id: string, value: string) {
  const idString = String(id)?.substring(0, 5);
  const valueString = String(value)?.substring(0, 10);

  return `${idString}-${valueString}`;
}
