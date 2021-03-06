let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date;

//Array
let colors: string[] = ['red', 'green', 'blue']
let numbers: (number | string)[] = [-2, 0, 2, 'ola']
let truths: boolean[] = [true, false, true]


//Classes
class Car {

}
let car: Car = new Car;
// Object literal
let points: { x: number; y: number } = {
    x: 10,
    y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
    return console.log(i);
}

//When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x":10,"y":20}';
let coordenates: { x: number; y: number } = JSON.parse(json);
console.log(coordenates)//x:10;y:20

//2) When we declare a variable on one line and initializate it later
let variableToInitializeAfterHisDeclaration: number;
variableToInitializeAfterHisDeclaration = 2;

//3) Variable whose type cannot be inferred correctly
let pcModels = ['Huawei', 'Lenovo', 'HP']
let keepLenovo: boolean | string;
for (let cont = 0; cont < pcModels.length; cont++) {
    if (pcModels[cont] === "Lenovo") {
        keepLenovo = pcModels[cont]
    } else {
        keepLenovo = false;
    }
};