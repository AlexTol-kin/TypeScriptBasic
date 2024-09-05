"use strict";
const totalPrice = (obj) => {
    return (obj.price - (obj.price * obj.discount) / 100) / obj.months;
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
// 1. Определяем какими типами будут заданные значение и итоговый результат
// 2. Описываем типы
// 3. Описываем формулу расчета
// 4. Получаем и сверяем результат
