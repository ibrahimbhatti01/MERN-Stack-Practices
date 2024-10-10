// 1. Factory Functions:
    // function personMaker(name, age){
    //     const person = {
    //         name: name,
    //         age: age,
    //         talk(){
    //             return `Hi I'm ${name}`
    //          }
    //      };
    //     return person
    //  };

    // let p1 = personMaker("noman", 20);
    // let p2 = personMaker("ibrahim", 19);



// 2. Constructors ---Doesn't return anything and start with Capital letter.
    // function Person(name, age){
    //     this.name = name;
    //     this.age = age;
    //  };

    // Person.prototype.talk = function (){
    //     console.log(`Hi I'm ${this.name}`);
    //  };

    // let p1 = new Person("noman", 20);



// 3. Classes
    // class Person {
    //     constructor(name, age){
    //         this.name = name;
    //         this.age = age;
    //     }
    //     talk(){
    //         console.log(`Hi I'm ${this.name}`);
    //     }
    // }

    // let p1 = new Person("ibrahim", 19);



// 4. Inheritence (extends & super Keywords) in Classes
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        };
        talk(){
            console.log(`Hi! I'm ${this.name}`);
        };
    };

    class Student extends Person {
        constructor(name, age, marks){
            super(name, age);
            this.marks = marks;
        };
    };

    class Teacher extends Person {
        constructor(name, age, subject){
            super(name, age);
            this.subject = subject;
        };
    };