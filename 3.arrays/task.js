// Задача №1 Сравнить массивы

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
}

// Задача №2 Получение среднего возраста пользователей одного пола

function getUsersNamesInAgeRange(users, gender) {
    let result = users
        .filter(user => user.gender === gender)
        .map(user => user.age)
        .reduce((acc, item, i, arr) => {
            acc += item;
            if (i === arr.length - 1){
                return acc / arr.length;
            }
            return acc;
        }, 0);
    return result;
}