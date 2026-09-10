"use strict";
// 2. Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// 3. Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2023);
// 4. Call the start method to verify it logs the message
myCar.start();
