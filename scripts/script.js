'use strict';

/* 

1) Функцию showTypeof и вызов функции удаляем 
2) В объект appData добавить свойство budget которое будет принимать значение money
3) В объект appData добавить свойства budgetDay, budgetMonth и expensesMonth, изначально равные нулю
4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData
5) После этого поправить весь проект, чтобы он работал, а именно везде где вызывались наши функции поправить обращение через объект, например let expensesMonth = appData.getExpensesMonth(); 

 Не переходить к следующим пунктам, пока не выполнишь предыдущие.
 Программа на данном этапе должна работать.

6) Сразу после объекта выполните вызов appData.asking();
7) Перенести цикл из метода getExpensesMonth в метод asking, и переписать цикл таким образом чтобы результат записывался в объект appData.expenses в формате:

expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”,
    “ответ на первый вопрос” : “ответ на второй вопрос”
}

временные условия которые мы писали
if (i === 0) {
    expenses1 = prompt('Введите обязательную статью расходов?', 'Кварплата');
} else {
    expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин');
}
уже не нужны, вопрос задается каждый цикл

Обратите внимание Если на вопрос "Введите обязательную статью расходов?" ответить 2 раза одинаково, значения свойства просто будут перезаписаны, для проверки отвечайте всегда по разному. (очень частая ошибка)
Проследите чтобы тип данных значения свойств были числом!

Пример результата:
expenses: {
    “Квартплата” : 5000,
    “Детский сад” : 2000
}

8) Переписать метод getExpensesMonth: с помощью цикла считаем сумму всех обязательных расходов и сохраняем результат в свойство expensesMonth нашего объекта для того, чтобы посчитать сумму используйте цикл for in
9) getAccumulatedMonth переименовать в getBudget. Этот метод будет высчитывать значения свойств budgetMonth и budgetDay, чтобы вычислить значения используем только свойства объекта (никаких внешних переменных)
10) В методах getTargetMonth и getStatusIncome исправить переменные, все значения получаем от нашего объекта appData
11) Вызвать все необходимые методы после объекта, чтобы корректно считались все данные (порядок очень важен).
12) В консоль вывести: 
    — Расходы за месяц
    — За какой период будет достигнута цель (в месяцах)
    — Уровень дохода

Все остальное почистить в программе у нас всего две переменных money и appData и две функции start и возможно isNumber

13) Используя цикл for in для объекта (appData), вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения)
14) Проверить, чтобы все работало и не было ошибок в консоли
15) Добавить папку с уроком в свой репозиторий на GitHub

*/

// Функция проверки на число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n) && n != '';
};

let money,
    income = "дополнительный доход",
    addExpenses = "дополнительные расходы",
    deposit,
    mission = 1000000,
    period = 12,
    budgetDay,
    expenses1, expenses2,
    amount1, amount2,
    statusIncome,
    accumulatedMonth,
    targetMonth,
    expenses;

// Проверка на число
let start = function(){
    do {
        money = prompt("Ваш месячный доход?", "100000");
    }
    while (!isNumber(money));
};

start();

// Создаю функцию, показывающую значение и тип переменной
let showTypeOf = function(data){
    console.log(data, typeof(data));
};

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "пример: Квартплата, проездной, кредит");
deposit = confirm("Есть ли у Вас депозит в банке?");

// Вызываем функцию для вывода типа переменной
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Расходы за месяц
expenses = [];

let getExpensesMonth = function(){
    let price, sum = 0;
    for (let i = 0; i < 2; i++){
        expenses[i] = prompt("Введите обязательную статью расходов", "Оплата ЖКХ");
        price = prompt("Во сколько это обойдется?", "3000");
        while (!isNumber(price)){
            price = prompt("Во сколько это обойдется?", "3000");
        }
        sum += Number(price);
    }
    
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

// Накопления за месяц
let getAccumulatedMonth = function(){
    accumulatedMonth = money - expensesAmount;
    return accumulatedMonth;
};

// Срок достижения цели
let getTargetMonth = function(){
    targetMonth = Math.ceil(mission / accumulatedMonth);
    return targetMonth;
};

getAccumulatedMonth();
getTargetMonth();

// Бюджет на день
budgetDay = Math.ceil(accumulatedMonth / 30);

console.log('Бюджет на день: ', budgetDay);
console.log('Возможные расходы: ', addExpenses.toLocaleLowerCase().split(', '));
console.log('Накопления за месяц: ', accumulatedMonth);
console.log('Расходы за месяц: ', expensesAmount);

if (targetMonth > 0){
    console.log('Цель заработать ', mission, ' рублей будет достигнута через ', targetMonth, ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}

// Проверка уровня доходов
let getStatusIncome = function(){
    statusIncome = (budgetDay >= 0 && budgetDay < 600) ? ('К сожалению у Вас уровень дохода ниже среднего.') : (budgetDay >= 600 && budgetDay < 1200) ? ('У Вас средний уровень дохода.') : (budgetDay >= 1200) ? ('У Вас высокий уровень дохода.') : ('Что-то пошло не так.');
    return statusIncome;
};

getStatusIncome();
console.log(statusIncome);
