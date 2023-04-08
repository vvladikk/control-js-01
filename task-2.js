const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  speed: 260,
  showInfo() {
    console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year}`);
  },
};

const myLocation = {
  city: "Київ",
  distance: 500,
};

function showTime() {
  const time = this.distance / car.speed;
  console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${myLocation.city} за ${time} годин`);
}


car.showInfo();


[myLocation].forEach(function (loc) {
  showTime.call(loc);
});
