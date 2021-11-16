const mickey = {
  fullName: "Tom",
  age: 2,
  getInfo: function () {
    console.log(this.fullName, this.age);
  },
  log: function (val) {},
};

console.log(mickey);
// tom.getInfo();

// console.log
// tom.log();
// // method

class Animal {
  constructor(fullName, age) {
    this._fullName = fullName;
    this._age = age;
  }

  logName() {
    console.log(this._fullName);
  }

  logAge() {
    console.log(this._age);
  }
}

class Bo extends Animal {
  constructor(fullName, age, color) {
    super(fullName, age);
    this._color = color;
  }

  logAge() {
    console.log(123456789);
  }

  logAnything() {
    super.logAge();
  }

  eating() {
    console.log("An co");
  }
}

class Meo extends Animal {
  constructor(fullName, age, temp) {
    super(fullName, age);
    this._temp = temp;
  }
}

const doreamon = new Animal("Doreamon", 72);
const dog = new Animal("Husky", 2);

// console.log(doreamon._color);
// console.log(dog._color);

let myConBo = new Bo("Bo vang`", 12, "Vang`");
let conMeo = new Meo("Tom", 12, "hahah");

myConBo.logAnything();
// myConBo.logAge();
// myConBo.eating();
// conMeo.logName();

// // Person {
// name;
// tuoi;
// soThich;
// // }

// extends person

// let alice = "Da den";
// let bob = "Gia den";
// let an = "da vang";

// Web componet

// class
// function

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class AsiaPerson extends Person {
  constructor(name, age, skin) {
    super(name, age);
    this.skin = skin;
  }
}

// let alice = new AsiaPerson("Alice", 20, "Trang");
// let bob = new AsiaPerson("Bob", 20, "Den");
// let an = new AsiaPerson("An", 20, "Vang");

// console.log(bob.skin);
