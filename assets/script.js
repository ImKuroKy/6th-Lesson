/*Создайте функцию-конструктор Box (коробка) для создания объекта со свойствами Height (высота), 
Width (ширина), Depth (глубина) и Material (материал). Также, в объекте должны быть методы Volume – 
для получения объема и equals() – для сравнения объектов, объекты должны считаться равными, если 
содержат одинаковые значения в свойстве Material. */
function Box (x, y, z, w) {
    this.height = x;
    this.width = y;
    this.depth = z;
    this.material = w;
};
Box.prototype.volume = function () {
    return ("Объём коробки равен " + (this.height * this.width * this.depth) + "<br/>");
};
Box.prototype.equals = function (otherObj) {
    let answer = (this.material === otherObj.material) ? "да" : "нет";
    return "Коробки из одного материала? Ответ: " + answer + "<br/>";
};
var firstBox = new Box(5, 5, 5, "cardboard");
var secondBox = new Box(7, 3, 5, "paper");
var thirdBox = new Box(2, 2, 10, "plastic");
var fourthBox = new Box(6, 4, 2, "cardboard");
document.write(firstBox.volume());
document.write(secondBox.volume());
document.write(thirdBox.volume());
document.write(fourthBox.volume());
document.write(firstBox.equals(secondBox));
document.write(firstBox.equals(thirdBox));
document.write(firstBox.equals(fourthBox));