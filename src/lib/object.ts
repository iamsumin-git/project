export function objFromArray(array, key = '$id') {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

export function keyArrayFromArray(array, key = '$id') {
  return array.reduce((accumulator, current) => {
    accumulator.push(current[key]);
    return accumulator;
  }, []);
}

export function iterateObject(obj, withKey?: boolean) {
  if (withKey) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  } else return Object.keys(obj).map((key) => obj[key]);
}
