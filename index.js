// Your code here
class Cat {
    constructor(name, gender) {
        self.name = name
        self.gender = gender
    }
        speak(){
            return `${self.name} says meow!`
        }
}
class Dog {
    constructor(name, gender) {
        self.name = name
        self.gender = gender
    }
        speak() {
            return `${self.name} says woof!`
        }
    
}
class Bird {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      if (this.gender == "male") {
        return `It's me! ${this.name}, the parrot!`
      } else {
        return `${this.name} says squawk!`
      }
    }
  }