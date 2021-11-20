import euclidean from "./euclidean.js";
import smallest from "./smallest.js";

function pickClassEuclid(length, data, newDot, k) {
  const euclid = euclidean(length, data, newDot);
  const tempEuclid = [...euclid];
  const small = smallest([...tempEuclid], k);

  let temp = [];
  for (let i = 0; i < tempEuclid.length; i++) {
    for (let k = 0; k < small.length; k++) {
      if (euclid[i] === small[k]) {
        temp.push(data[i].class);
        break;
      }
    }
  }

  console.log("TEMP " + temp);

  let oClass = 0;
  let pClass = 0;

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "o") {
      oClass++;
    } else pClass++;
  }

  console.log("oClass " + oClass);

  if (oClass > pClass) {
    return "o";
  } else if (pClass > oClass) {
    return "p";
  } else return "g";
}

export default pickClassEuclid;
