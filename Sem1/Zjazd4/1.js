let keyGetters = {
  company: (x) => x.company,
  type: (x) => x.type,
  monthYear: (x) =>
    x.date.getFullYear().toString() + "-" + (x.date.getMonth() + 1).toString(),
  dayOfTheWeek: (x) => x.date.getDay(),
};

let valueGetters = {
  cost: (x) => x.cost,
};

function Operation(cost, type, company, date) {
  this.cost = cost;
  this.type = type;
  this.company = company;
  this.date = date;
}

function parseToDate(dateInString) {
  dateInString = dateInString.split("-");
  return new Date(
    dateInString[2],
    Number.parseInt(dateInString[1]) - 1,
    dateInString[0]
  );
}

function getData(address) {
  return require(address);
}

function getYearSpendings(financialData, year) {
  return financialData
    .filter((x) => x.date.getFullYear() === year)
    .reduce((x, y) => x + y.cost, 0);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function agregate(data, keyFn, valueFn) {
  let uniques = data
    .map(keyFn)
    .filter(onlyUnique)
    .map((x) => {
      return { key: x, value: 0 };
    });

  data.forEach(
    (x) => (uniques.find((y) => y.key === keyFn(x)).value += valueFn(x))
  );
  return uniques;
}

let data = getData("./Data.json");
data = data.map(
  (x) =>
    new Operation(
      Number.parseFloat(x.cost),
      x.detailsOfPayent.Type,
      x.detailsOfPayent.company,
      parseToDate(x.detailsOfPayent.date)
    )
);

let ys = getYearSpendings(data, 2014); // pass value to funcion, not hordcode it inside it

let spendingsPerCompany = agregate(data, keyGetters.company, valueGetters.cost);

let spendingsPerTransaction = agregate(
  data,
  keyGetters.type,
  valueGetters.cost
);

let spendingsPerMonthYear = agregate(
  data,
  keyGetters.monthYear,
  valueGetters.cost
);

let spendingsPerDay = agregate(
  data,
  keyGetters.dayOfTheWeek,
  valueGetters.cost
);
let i = 0;
