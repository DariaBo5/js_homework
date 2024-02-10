let age = prompt("Вкажіть ваш вік", "");

let end = '';

if(age === '') {
    console.log ('Вкажіть ваш вік, будь ласка!')
} else if (age < 0) {
    console.log ('Вік не може бути менше 0')
} else if ((age % 100 >= 11 && age % 100 <= 14) || age % 10 === 0 || (age % 10 >= 5 && age % 10 <= 9)) {
    end = 'років';
    console.log(age + ' ' + end);
} else if (age % 10 === 1) {
    end = 'рік';
    console.log(age + ' ' + end);
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
    end = 'роки';
    console.log(age + ' ' + end);
} 



