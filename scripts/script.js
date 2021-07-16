'use strict';

/* 
1) Следующим переменным присвоить значения 
   - money - любое число “Доход за месяц”,
   - income - строка с дополнительными доходом (например: фриланс), 
   - addExpenses - строка с перечислением дополнительных расходов через запятую (например: интернет, такси, коммуналка), 
   - deposit - любое булево значение,
   - mission - любое число (Какую сумму хотите накопить),
   - period - число от 1 до 12 (месяцев)

2) Используя методы и свойства:
   - Вывести в консоль тип данных значений переменных money, income, deposit;
   - Вывести в консоль длину строки addExpenses
   - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
   - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
   - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
   - Вывести в консоль budgetDay

3) Проверить, чтобы все работало и не было ошибок в консоли

4) Добавить папку или ветку со вторым уроком в свой репозиторий на GitHub */

let money = 10000,
    income = "дополнительный доход",
    addExpenses = "дополнительные расходы",
    deposit = true,
    mission = 1000000,
    period = 12;

    
    console.log('money: ', money);
    console.log('income: ', income);
    console.log('deposit: ', deposit);

    console.log('money: ', typeof money);
    console.log('income: ', typeof income);
    console.log('deposit: ', typeof deposit);
    
    console.log('длина addExpenses =', addExpenses.length);
    console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей`);
    console.log(addExpenses.toLocaleLowerCase().split(', '));
    let budgetDay = money / 30;
    budgetDay = Math.ceil(budgetDay);
    console.log('budgetDay: ', budgetDay);

    console.log('deposit: ', deposit);
    console.log('period: ', period);
