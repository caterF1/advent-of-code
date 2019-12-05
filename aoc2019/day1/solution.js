const fs = require('fs');

let dataArr = [];
let dataStr = '';
let intArr = [];

let sum = 0;
let netSum = 0;

//read input
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    dataStr = data.toString();
    dataArr = dataStr.split(/\r\n|\r|\n/g);
    for (let str of dataArr) {
        intArr.push(parseInt(str));
    }

    //part one
    for (let item of intArr) {
        sum += operation(item);
    }
    console.log('Sum: ' + sum);

    //part two
    function unitModule(fuel) {
        let unitSum = 0;
        let temp = operation(fuel);;
        while (temp > 0) {
            unitSum += temp;
            temp = operation(temp);
        }
        return unitSum;
    }

    for (let item of intArr) {
        netSum += unitModule(item);
    }
    console.log('netSum: ' + netSum);

});

let operation = (num) => {
    let result = 0;
    result = Math.floor(num / 3) - 2;
    return result;
}
