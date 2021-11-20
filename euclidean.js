function euclidean(length, data, newDot) {
  let values = [];
  for (let i = 0; i < length; i++) {
    values[i] = Math.sqrt(
      (newDot.x - data[i].x) * (newDot.x - data[i].x) +
        (newDot.y - data[i].y) * (newDot.y - data[i].y)
    );
  }

  return values;
}

export default euclidean;
