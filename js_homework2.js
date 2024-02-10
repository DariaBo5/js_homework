let age = prompt("Вкажіть ваш вік", "");

let end = '';

if ((age % 100 >= 11 && age % 100 <= 14) || age % 10 === 0 || (age % 10 >= 5 && age % 10 <= 9)) {
    end = 'років';
} else if (age % 10 === 1) {
    end = 'рік';
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
    end = 'роки';
}

console.log(age + ' ' + end);



