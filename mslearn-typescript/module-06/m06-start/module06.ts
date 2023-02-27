/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            console.log('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

type person = { name: string;  age: number };

let cities = new DataStore<string>();
let numbers = new DataStore<number>();
let persons = new DataStore<person>();



cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.
numbers.AddOrUpdate(0, 22);
numbers.AddOrUpdate(1, 33);
numbers.AddOrUpdate(11, 99);

console.log(numbers.GetData(1), numbers);
console.log(numbers.GetData(11));

// TODO Test items as objects.
persons.AddOrUpdate(0, {name: 'john doe', age: 22});
persons.AddOrUpdate(1, {name: 'jane doe', age: 33});
persons.AddOrUpdate(11, { name: 'bob england', age: 99 });


console.log(persons.GetData(1));
console.log(persons.GetData(11));

