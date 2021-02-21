import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];
for(let i =0; i < dataset.length; i++) {
switch (dataset[i]["method"]) {
  case "add":
    console.log(dataset[i]["x"] + dataset[i]["y"]); //Doing my own math
    console.log(calculator.add(dataset[i]["x"],dataset[i]["y"]));//Passing terms into the right calculator method
    break;
  case "subtract":
    console.log(dataset[i]["x"] - dataset[i]["y"]);
    console.log(calculator.subtract(dataset[i]["x"],dataset[i]["y"]));
    break;
  case "multiply":
    console.log(dataset[i]["x"]*dataset[i]["y"]);
    console.log(calculator.multiply(dataset[i]["x"],dataset[i]["y"]));
    break;
  case "divide":
    console.log(dataset[i]["x"]/dataset[i]["y"]);
    console.log(calculator.divide(dataset[i]["x"],dataset[i]["y"]));
    break;
}}
describe("Calculator", () => { //Testing that my own math equals the calculator functions
for(let k = 0; k < dataset.length; k++) {
  if(dataset[k]["method"] == "add") {
    it("Addition:", () => {
      expect(dataset[k]["x"] + dataset[k]["y"]).toEqual(calculator.add(dataset[k]["x"],dataset[k]["y"]));
    }
    )}
  if(dataset[k]["method"] == "subtract") {
    it("Subtraction:", () => {
      expect(dataset[k]["x"] - dataset[k]["y"]).toEqual(calculator.subtract(dataset[k]["x"],dataset[k]["y"]));
    }
    )}
if(dataset[k]["method"] == "multiply") {
  it("Multiply:", () => {
    expect(dataset[k]["x"]*dataset[k]["y"]).toEqual(calculator.multiply(dataset[k]["x"],dataset[k]["y"]));
  }
  )}
if(dataset[k]["method"] == "divide") {
  it("Divide:", () => {
    expect(dataset[k]["x"]/dataset[k]["y"]).toEqual(calculator.divide(dataset[k]["x"],dataset[k]["y"]));
  })}}});