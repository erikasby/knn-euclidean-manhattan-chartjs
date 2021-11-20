import manhattan from "./manhattan.js";
import smallest from "./smallest.js";

function pickClassManhat(length, data, newDot, k) {
  let manhat = manhattan(length, data, newDot);
  let tempManhat = [...manhat];
  let small = smallest([...tempManhat], k);

  let temp = [];
  for (let i = 0; i < manhat.length; i++) {
    for (let k = 0; k < small.length; k++) {
      if (manhat[i] === small[k]) {
        temp.push(data[i].class);
        break;
      }
    }
  }

  let oClass = 0;
  let pClass = 0;

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "o") {
      oClass++;
    } else pClass++;
  }

  if (oClass > pClass) {
    return "o";
  } else if (pClass > oClass) {
    return "p";
  } else return "g";
}

export default pickClassManhat;
