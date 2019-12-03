const fs = require('fs');
let dataArr = [];
let dataStr = '';
let intArr = [];
let sumArr = [0];

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    dataStr = data.toString();
    dataArr = dataStr.split(/\r\n|\r|\n/g);

    for (let str of dataArr) {
        intArr.push(parseInt(str));
    }

    let findFrequency = () => {
        let tempSum = 0;
        let toggle = true;
        let i = 0;
        while (toggle === true) {
            for (i = 0; i < intArr.length; i++) {

                tempSum += intArr[i];
                if (sumArr.includes(tempSum)) {
                    toggle = false;
                    return tempSum;
                }
                sumArr.push(tempSum);
            }
            if(i = intArr.length-1) i = 0;
        }
    }
    console.log('my frequency is: ' + findFrequency());
});
