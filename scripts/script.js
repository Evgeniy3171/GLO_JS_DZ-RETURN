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
    expenses1,
    expenses2,
    amount1,
    amount2,
    budgetMonth;
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

expenses1 = prompt("Введите обязательную статью расходов", "Оплата ЖКХ");
amount1 = +prompt("Во сколько это обойдется?", "3000");
expenses2 = prompt("Введите другую обязательную статью расходов", "Оплата ЖКХ");
amount2 = +prompt("Во сколько это обойдется?", "2000");

budgetMonth = money - amount1 - amount2;

console.log('длина addExpenses =', addExpenses.length);
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

console.log('Бюджет на месяц: ', budgetMonth);
console.log(`Цель заработать ${mission} рублей будет достигнута через`, Math.ceil(mission / budgetMonth), 'месяцев');


budgetDay = Math.ceil(budgetMonth / 30);
console.log('Бюджет на день: ', budgetDay);

/* Проверка уровня доходов */

let getStatusIncome = function(){
    (budgetDay >= 0 && budgetDay < 600) ? console.log('К сожалению у Вас уровень дохода ниже среднего.') : 
    (budgetDay >= 600 && budgetDay < 1200) ? console.log('У Вас средний уровень дохода.') : 
    (budgetDay >= 1200) ? console.log('У Вас высокий уровень дохода.') : console.log('Что-то пошло не так.')
};

getStatusIncome();