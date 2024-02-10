let unit = 'год'

let num1 = 2;

switch (unit) {
    case 'км':
        console.log(num1 + ' км це ' + (num1 * 1000) + ' м')
        break;
    case 'год':
        console.log(num1 + ' год це ' + (num1 * 60) + ' хв')
        break;
    case 'кг':
        console.log(num1 + ' кг це ' + (num1 * 1000) + ' г')
        break;
    default:
        console.log('Некоректна одиниця виміру');
}