'use strict';

/* 

1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

5) Удалить из кода переменную budgetMonth

6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

7) Почистить консоль логи и добавить недостающие, должны остаться:
 - вызовы функции showTypeOf
 - Расходы за месяц вызов getExpensesMonth
 - Вывод возможных расходов в виде массива (addExpenses)
 - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
 - Бюджет на день (budgetDay)
 - вызов функции getStatusIncome

8) Проверить, чтобы все работало и не было ошибок в консоли

9) Добавить папку с четвертым уроком в свой репозиторий на GitHub

*/

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
    expensesMonth,
    targetMonth;

// Создаю функцию, показывающую значение и тип переменной
let showTypeOf = function(data){
    console.log(data, typeof(data));
};

money = +prompt("Ваш месячный доход?", "100000");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "пример: Квартплата, проездной, кредит");
deposit = confirm("Есть ли у Вас депозит в банке?");

// Вызываем функцию для вывода типа переменной
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Расходы за месяц
let getExpensesMonth = function(){
    expenses1 = prompt("Введите обязательную статью расходов", "Оплата ЖКХ");
    amount1 = +prompt("Во сколько это обойдется?", "3000");
    expenses2 = prompt("Введите другую обязательную статью расходов", "Оплата ЖКХ");
    amount2 = +prompt("Во сколько это обойдется?", "2000");
    expensesMonth = amount1 + amount2;
    return expensesMonth;
};

// Накопления за месяц
let getAccumulatedMonth = function(){
    accumulatedMonth = money - expensesMonth;
    return accumulatedMonth;
};

// Срок достижения цели
let getTargetMonth = function(){
    targetMonth = Math.ceil(mission / accumulatedMonth);
    return targetMonth;
};

getExpensesMonth();
getAccumulatedMonth();
getTargetMonth();

// Бюджет на день
budgetDay = Math.ceil(accumulatedMonth / 30);

console.log('Бюджет на день: ', budgetDay);
console.log('Возможные расходы: ', addExpenses.toLocaleLowerCase().split(', '));
console.log('Накопления за месяц: ', accumulatedMonth);
console.log('Расходы за месяц: ', expensesMonth);
console.log('Цель заработать ', mission, ' рублей будет достигнута через ', targetMonth, ' месяцев');

// Проверка уровня доходов

let getStatusIncome = function(){
    statusIncome = (budgetDay >= 0 && budgetDay < 600) ? ('К сожалению у Вас уровень дохода ниже среднего.') : (budgetDay >= 600 && budgetDay < 1200) ? ('У Вас средний уровень дохода.') : (budgetDay >= 1200) ? ('У Вас высокий уровень дохода.') : ('Что-то пошло не так.');
    return statusIncome;
};

getStatusIncome();
console.log(statusIncome);
