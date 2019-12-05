const fs = require('fs');

let dataArr = [];
let dataStr = '';
let intArr = [];
let intArr2 = [];

//read input
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    dataStr = data.toString();
    dataArr = dataStr.split(/,/g);
    for (let str of dataArr) {
        intArr.push(parseInt(str));
        intArr2.push(parseInt(str));

    }

    //part one
    intArr[1] = 12;
    intArr[2] = 2;
    let partOne = (arr) => {
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === 1) {
                let position1 = arr[i + 1];
                let position2 = arr[i + 2];
                let position3 = arr[i + 3];
                arr[position3] = arr[position1] + arr[position2];
                i += 4;
            }
            else if (arr[i] === 2) {
                let position1 = arr[i + 1];
                let position2 = arr[i + 2];
                let position3 = arr[i + 3];
                arr[position3] = arr[position1] * arr[position2];
                i += 4;
            }
            else if (arr[i] === 99) {
                return arr[0];
            }
            else {
                return;
            }
        }
    };
    console.log(partOne(intArr));

    //part two
    let partTwo = () => {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                let tempIntArr = intArr2.slice();
                tempIntArr[1] = i;
                tempIntArr[2] = j;
                let temp = 0;
                temp = partOne(tempIntArr);
                if (temp === 19690720) {
                    let result = i * 100 + j;
                    return result;
                }
            }
        }
    }
    console.log(partTwo());
});