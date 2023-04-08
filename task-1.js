const person = {
    name: "John",
    age: 30,
    gender: "male",
    introduce() {
      return `Мене звати ${this.name}, мені ${this.age} років, я ${this.gender}.`;
    },
    changeName(newName) {
      this.name = newName;
    },
  };
  
  console.log(person.introduce());
  
  person.changeName("Peter");

  console.log(person.introduce())  