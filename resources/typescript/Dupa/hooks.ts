export function useState(initialValue: any) {
  let stateValue: any = initialValue;
  const stateSetter = (newValue: any) => stateValue = newValue;
  return [stateValue, stateSetter];
}

export function useSelector(selectorName: string) {

}
