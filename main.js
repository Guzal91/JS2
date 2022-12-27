//Задание 1: Возраст

var a = prompt ('Insert your age!');

if (a > 0 && a < 18 || a == 18) {
    console.log('Вы ещё молоды, Вам нужно учиться!');
}
else if (a > 18 && a < 50 || a == 50){
    console.log('Вам нужно работать!');
}
else if (a > 50 && a < 59 || a == 59){
    console.log('Вам скоро на пенсию!');
}
else if (a > 59 && a < 100 || a == 100){
    console.log('Вы пенсионер!');
}
else{
    console.log('Что-то пошло не так!');
}

// Задание 2: Время

var b = +prompt('Insert the time!')

switch (b) {
    case 1:
        alert('Час ночи!')
        break;
    case 2:
        alert('Два часа ночи!')
        break;
    case 3:
        alert('Три часа ночи!')
        break;
    case 4:
        alert('Четыре часа утра!')
        break;
    case 5:
        alert('Пять часов утра!')
        break;
    case 6:
        alert('Шесть часов утра!')
        break;
    case 7:
        alert('Семь часов утра!')
        break;
    case 8:
        alert('Восемь часов утра!')
        break;
    case 9:
        alert('Девять часов утра!')
        break;
    case 10:
        alert('Десять часов утра!')
        break;
    case 11:
        alert('Одиннадцать часов утра!')
        break;
    case 12:
        alert('Двенадцать часов дня!')
        break;
    case 13:
        alert('Час дня!')
        break;
    case 14:
        alert('Два часа дня!')
        break;
    case 15:
        alert('Три часа дня!')
        break;
    case 16:
        alert('Четыре часа дня!')
        break;
    case 17:
        alert('Пять часов вечера!')
        break;
    case 18:
        alert('Шесть часов вечера!')
        break;
    case 19:
        alert('Семь часов вечера!')
        break;
    case 20:
        alert('Восемь часов вечера!')
        break;
    case 21:
        alert('Девять часов вечера!')
        break;
    case 22:
        alert('Десять часов ночи!')
        break;
    case 23:
        alert('Одиннадцать часов ночи!')
        break;
    case 24 || 0:
        alert('Двенадцать часов ночи!')
        break;            
    default:
        alert('Not a time!')
        break;
}

// Задание 3: Среднее число

var c = +prompt('Insert the first number');
var d = +prompt('Insert the second number');
var e = +prompt('Insert the third number');

if(c > d && c < e || c > e && c < d){
    console.log(c);
}
else if(d > c && d < e || d < c && d > e){
    console.log(d);
}
else if(e > c && e < d || e < c && e > d){
    console.log(e);
}
else{
    console.log('something went wrong');
}