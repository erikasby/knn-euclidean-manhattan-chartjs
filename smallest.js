function smallest(arr, k) {
  let value = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) value.push(arr[i]);
  return value;
}

export default smallest;
