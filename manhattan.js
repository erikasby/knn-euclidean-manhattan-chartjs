function manhattan(length, data, newDot) {
  let values = [];
  for (let i = 0; i < length; i++) {
    values[i] = Math.abs(newDot.x - data[i].x) + Math.abs(newDot.y - data[i].y);
  }
  return values;
}

export default manhattan;
