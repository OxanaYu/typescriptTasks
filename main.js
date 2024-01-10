/*
TypeScript это строго типизированный язык программирования, фактически это альтернативный синтаксис JavaScript или обертка над ним, а это значит, что в основе по прежнему лежит обычный JS. Для каждой переменной, константы, для каждого аргумента функции и результата этой функции, для каждого класса, свойства, метода можно задать тип. Если задать типизацию для всех элементов еще на стадии написания кода, можно легко отследить, где конкретно произошла ошибка.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var thisBoolean = true;
thisBoolean = false;
var user = {
    name: "Max",
    age: 23,
};
var address = {
    city: "Almaty",
    country: "Kazakhstan",
};
// let common = {
//   ...user,
//   ...address,
// };
var common;
common = __assign(__assign({}, address), user);
// ! Типизация массивов
// let arr: string[];
// let arr2: Array<string>;
// arr = ["34", "ewe"];
//массив, который можно только прочитывать, нельзя изменить
var arr2 = [1, 2, 3, 4];
arr2[0];
var arr3 = [1, "2", null];
function getName(name) {
    return { name: name };
}
//типизация стрелочной функции
var getName2 = function (name) {
    return { name: name };
};
var getName3 = function (name) {
    return { name: name };
};
console.log("hello");
function createAnimal(name, sound) {
    return {
        name: name,
        makeSound: function () {
            console.log(sound);
        },
    };
}
var dog = createAnimal("Laika", "Woof!");
dog.makeSound();
