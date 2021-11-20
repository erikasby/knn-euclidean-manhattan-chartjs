import pickClassEuclid from "./pickClassEuclid.js";
import pickClassManhat from "./pickClassManhat.js";

const ctx = document.getElementById("myChart").getContext("2d");
const btnXY = document.querySelector("#xy");
const btnKNN = document.querySelector("#knn");
let xValue = document.querySelector("#xValue");
let yValue = document.querySelector("#yValue");
let KNNValue = document.querySelector("#KNNValue");
let algoValue = document.querySelector("#algoValue");
let eTime = document.querySelector("#e-time");
let mTime = document.querySelector("#m-time");
let eClass = document.querySelector("#eClass");
let mClass = document.querySelector("#mClass");
let updateBtn = document.querySelector("#update");

btnKNN.addEventListener("click", function () {
  contribute();
});

btnXY.addEventListener("click", function () {
  contribute();
});

updateBtn.addEventListener("click", function () {
  contribute();
});

function contribute() {
  xValue = document.querySelector("#xValue");
  yValue = document.querySelector("#yValue");
  KNNValue = document.querySelector("#KNNValue");
  algoValue = document.querySelector("#algoValue");

  let newDot = { x: parseInt(xValue.value), y: parseInt(yValue.value) };

  if (onData.length > 6) {
    onData.pop();
    onBackgroundColor.pop();
    console.log(onBackgroundColor);
    onBorderColor.pop();
    console.log(onBorderColor);
  }

  var start1 = window.performance.now();
  let euc = pickClassEuclid(
    onData.length,
    onData,
    newDot,
    parseInt(KNNValue.value)
  );
  var end1 = window.performance.now();
  var time1 = end1 - start1;
  console.log(time1);
  console.log("EUC " + euc);
  eTime.innerText = time1.toFixed(12);

  if (euc === "o") {
    eClass.innerText = euc;
    eClass.style.color = "rgba(255, 159, 64, 1)";
  } else if (euc === "p") {
    eClass.innerText = euc;
    eClass.style.color = "rgba(153, 102, 255, 1)";
  } else {
    eClass.innerText = euc;
    eClass.style.color = "rgba(69, 213, 105, 1)";
  }

  var start2 = window.performance.now();
  let man = pickClassManhat(
    onData.length,
    onData,
    newDot,
    parseInt(KNNValue.value)
  );
  var end2 = window.performance.now();
  var time2 = end2 - start2;
  console.log(time2);
  mTime.innerText = time2.toFixed(12);

  if (man === "o") {
    mClass.innerText = man;
    mClass.style.color = "rgba(255, 159, 64, 1)";
  } else if (man === "p") {
    mClass.innerText = man;
    mClass.style.color = "rgba(153, 102, 255, 1)";
  } else {
    mClass.innerText = man;
    mClass.style.color = "rgba(69, 213, 105, 1)";
  }

  let itsClass = "";
  console.log(itsClass);
  if (algoValue.value === "euclidean") {
    itsClass = euc;
  } else if (algoValue.value === "manhattan") {
    itsClass = man;
    console.log("MAN " + man);
  }
  console.log(itsClass);

  updateBoard(parseInt(xValue.value), parseInt(yValue.value), itsClass);
}

let onData = [
  { x: 1, y: 2, class: "o" },
  { x: 3, y: 4, class: "o" },
  { x: 6, y: 4, class: "o" },
  { x: 2, y: 1, class: "p" },
  { x: 4, y: 1, class: "p" },
  { x: 5, y: 2, class: "p" },
];

let defaultData = [
  { x: 1, y: 2, class: "o" },
  { x: 3, y: 4, class: "o" },
  { x: 6, y: 4, class: "o" },
  { x: 2, y: 1, class: "p" },
  { x: 4, y: 1, class: "p" },
  { x: 5, y: 2, class: "p" },
];

let onBackgroundColor = [
  "rgba(255, 159, 64, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(153, 102, 255, 1)",
];

let onBorderColor = [
  "rgba(255, 159, 64, 0.3)",
  "rgba(255, 159, 64, 0.3)",
  "rgba(255, 159, 64, 0.3)",
  "rgba(153, 102, 255, 0.3)",
  "rgba(153, 102, 255, 0.3)",
  "rgba(153, 102, 255, 0.3)",
];

// const itsClass = pickClass(giveData.length);

function updateBoard(xAxis, yAxis, itsClass) {
  console.log(itsClass);

  if (itsClass === "o") {
    onBackgroundColor.push("rgba(255, 159, 64, 1)");
    onBorderColor.push("rgba(255, 159, 64, 0.3)");
  } else if (itsClass === "p") {
    onBackgroundColor.push("rgba(153, 102, 255, 1)");
    onBorderColor.push("rgba(153, 102, 255, 0.3)");
  } else {
    onBackgroundColor.push("rgba(69, 213, 105, 1)");
    onBorderColor.push("rgba(69, 213, 105, 0.3)");
  }
  onData.push({ x: xAxis, y: yAxis, class: itsClass });
  myChart.update();
}

const datasets = [
  {
    label: "KNN Algorithm",
    data: onData,
    backgroundColor: onBackgroundColor,
    borderColor: onBorderColor,
    borderWidth: 0,
    pointRadius: 15,
    pointHoverRadius: 20,
    hoverBorderWidth: 11,
  },
];
const myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange",
      "Black",
      "Black",
    ],
    datasets,
  },
  options: {
    aspectRatio: 1,
    layout: {
      autoPadding: true,
    },
    scales: {
      y: {
        min: -1,
        max: 12,
        ticks: {
          stepSize: 1,
        },
      },

      x: {
        min: -1,
        max: 12,
        ticks: {
          stepSize: 1,
        },
      },
    },
  },
});

// Reikia prideti dar 2 lenteles
// 1 lentele leidzia pasirinkti algoritma pagal kuri prides
// 2 lentele parodo kokia yra euclidean ir manhattan klase
