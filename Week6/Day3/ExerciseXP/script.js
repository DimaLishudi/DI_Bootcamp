{
    console.log("EXERCISE 1")

    // 🌟 Exercise 1 : Location
    // Instructions
    // Analyze the code below. What will be the output?
    const person = {
        name: 'John Doe',
        age: 25,
        location: {
            country: 'Canada',
            city: 'Vancouver',
            coordinates: [49.2827, -123.1207]
        }
    }

    const {name, location: {country, city, coordinates: [lat, lng]}} = person;

    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

    // A: output is what one would expect:
    // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
}

{
    console.log("EXERCISE 2")
    // 🌟 Exercise 2: Display Student Info
    // Instructions
    function displayStudentInfo(objUser){
        let {first, last} = objUser
        console.log(`Your full name is ${first} ${last}`)
    }

    // Using the code above, destructure the parameter inside the function and return a string as the example seen below:
    // //output : 'Your full name is Elie Schoppik'

    displayStudentInfo({first: 'Elie', last:'Schoppik'});
}

{
    console.log("EXERCISE 3")
    // 🌟 Exercise 3: User & Id
    // Instructions
    // Using this object 
    const users = { user1: 18273, user2: 92833, user3: 90315 }

    // Using methods taught in class, turn the users object into an array:
    // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
    // FYI : The number is their ID number.

    let entries = Object.entries(users)
    console.log(entries)

    // Modify the outcome of part 1, by multipling the user’s ID by 2.
    // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
    entries = entries.map(({user, value}) => {
        return {user, value: value * 2}
    })
    console.log(entries)
}

{
    console.log("EXERCISE 4")
    // Exercise 4 : Person Class
    // Instructions
    // Analyze the code below. What will be the output?
    class Person {
    constructor(name) {
        this.name = name;
    }
    }

    const member = new Person('John');
    console.log(typeof member);
    // A: type is an object, to get class we can use member.constructor.name
    //    or we can get prototype via member.prototype
}

{
    console.log("EXERCISE 4")
    // 🌟 Exercise 5 : Dog Class
    // Instructions
    // Using the Dog class below:

    class Dog {
      constructor(name) {
        this.name = name;
      }
    };
    // Analyze the options below. Which constructor will successfully extend the Dog class?
    //   // 1
    // class Labrador extends Dog {
    //   constructor(name, size) {
    //     this.size = size;
    //   }
    // };

    //   // 2
    // class Labrador extends Dog {
    //   constructor(name, size) {
    //     super(name);
    //     this.size = size;
    //   }
    // };

    //   // 3
    // class Labrador extends Dog {
    //   constructor(size) {
    //     super(name);
    //     this.size = size;
    //   }
    // };


    //   // 4
    // class Labrador extends Dog {
    //   constructor(name, size) {
    //     this.name = name;
    //     this.size = size;
    //   }
    // };

    // A: Constructor #2 - as we need to call super(name)
    //    note, that #3 is incorrect, as constructor does not recieve name, to pass it to super

}

{
    console.log("EXERCISE 6")
    // 🌟 Exercise 6 : Challenges
    // Evaluate these (ie True or False)

    // [2] === [2]
    // {} === {}

    // A: False, False. Strict equality for objects and arrays check if they reference the same object
    //    Here they reference 2 different objects (even though these object have same contents)

    // What is, for each object below, the value of the property number and why?

    // const object1 = { number: 5 }; 
    // const object2 = object1; 
    // const object3 = object2; 
    // const object4 = { number: 5};

    // object1.number = 4;
    // console.log(object2.number)
    // console.log(object3.number)
    // console.log(object4.number)

    // A: variables object1, 2, 3 all reference the same object
    //    variable object4 references another object
    //    => we get 4, 4, 5

    // Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

    class Animal {
        constructor(name, type, color) {
            this.name = name
            this.type = type
            this.color = color
        }
    }

    // Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

    class Mammal extends Animal {
        // constructor() {
        //     super()
        // }

        sound(animalSound) {
            console.log(`${animalSound} I'm a ${this.type} named ${this.name} and I'm ${this.color}`)
        }
    }

    // Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
    // For example: Moooo I'm a cow, named Lily and I'm brown and white

    const farmerCow = new Mammal("Lily", "cow", "brown and white")
    farmerCow.sound("Moooo")
}