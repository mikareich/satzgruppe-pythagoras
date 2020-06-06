const calculatorRows = document.querySelectorAll(".calculator-row");

const modes = [
  {
    id: "satz_des_pythagoras",
    params: ["a", "b"],
    res: "c",
    calculation: (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
  },
  {
    id: "hoehensatz_des_euklid",
    params: ["p", "q"],
    res: "h",
    calculation: (p, q) => Math.sqrt(p * q)
  },
  {
    id: "kathetensatz1_des_euklid",
    params: ["q", "c"],
    res: "b",
    calculation: (q, c) => Math.sqrt(q * c)
  },
  {
    id: "kathetensatz2_des_euklid",
    params: ["p", "c"],
    res: "a",
    calculation: (p, c) => Math.sqrt(p * c)
  }
];

calculatorRows.forEach((row) => {
  const currentMode = row.dataset.calculation;
  const calcData = modes.find((mode) => mode.id === currentMode);
  const params = {};
  const resultSpan = row.querySelector("#result");

  let result = undefined;

  row
    .querySelector(`#${calcData.params[0]}`)
    .addEventListener("change", changeDetected);
  row
    .querySelector(`#${calcData.params[1]}`)
    .addEventListener("change", changeDetected);

  function changeDetected() {
    // update params
    params[this.id] = parseFloat(this.value);
    // try to calculate
    result = calcData.calculation(
      params[calcData.params[0]],
      params[calcData.params[1]]
    );
    resultSpan.textContent = Math.round(result * 100) / 100 || calcData.res;
  }
});
