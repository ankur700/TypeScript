"use strict";
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            console.log('Index is greater than 10');
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
let numbers = new DataStore();
let persons = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
numbers.AddOrUpdate(0, 22);
numbers.AddOrUpdate(1, 33);
numbers.AddOrUpdate(11, 99);
console.log(numbers.GetData(1), numbers);
console.log(numbers.GetData(11));
// TODO Test items as objects.
persons.AddOrUpdate(0, { name: 'john doe', age: 22 });
persons.AddOrUpdate(1, { name: 'jane doe', age: 33 });
persons.AddOrUpdate(11, { name: 'bob england', age: 99 });
console.log(persons.GetData(1));
console.log(persons.GetData(11));
