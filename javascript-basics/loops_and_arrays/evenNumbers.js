const readlineSync = require('readline-sync');

for (let i=0; i<=10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let i = 0;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

let input = 0;
