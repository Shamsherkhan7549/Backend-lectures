// let arr = [1,2,3,4];

// arr.sayhello = () => {
//     console.log("hello!, i am arr1")
// }

// arr.__proto__.push = (n) => {
//     console.log("pushed number is ", n)
// }


// function personMaker(name, age, speak){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log("Hi, I can talk.")
//         }
//     }

//     return person
// }

// Construtor does not return anything & start with capital letter

// function Person(name, age) {
//     this.name = name;
//     this.age  = age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi i am ${this.name}`)
// };


// let p1 = new Person("shamsher", 24);
// let p2 = new Person("sameer", 24);


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age  = age;
//     }

//     talk(){
//         console.log(`Hi, my name is ${this.name}`)
//     }
// };

// const p1 = new Person("shamsher", 25);
// const p2 = new Person("sameer", 18);


// class Person{
    
//     constructor(name, age){
//         this.name= name;
//         this.age= age
        
//     }

//     talk(){
//         console.log("Hi, I can talk!")
//     }
// }

// class Student extends Person{
//     constructor(name, age, marks){
//         super(name, age);
//         this.marks = marks
//     }
//     talk(){
//         console.log("Hi, I can not talk!")
//     }
// }

// class Teacher extends Person{
//     constructor(name, age, subject){
//         super(name, age);

//         this.subject = subject;
//     }
// }

// let student1 = new Student("adam", 23, 100);
// let teacher1 = new Teacher("casey", 35);


class Animal{
    constructor(name, talk, eat){
        this.name = name;
        this.eat = eat;
        this.talk = talk;
    }

    talks(){
        console.log(`${this.name} speaks ${this.talk} and eats ${this.eat}`)
    }
}


class Cat extends Animal{
    constructor(name, talk , eat, breed){
        super(name, talk, eat);
        this.breed = breed;
    }
}

class Dog extends Animal{
    constructor(name, talk, eat, sense){
        super(name, talk, eat);

        this.sense = sense
    }

    bark(){
        console.log('Dog barks.')
    }
}


let Cat1  = new Cat('tom', 'meow', 'fish', 'indian');

let Dog1 = new Dog('tommy', 'bark', 'animal bones', 'six sense')
