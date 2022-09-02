

class Pet {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    } 
    eat(){
        return `${this.name} is eating!`;
    } 
}


class Cat extends Pet{
    // constructor (name, age) {
    //     this.name = name;
    //     this.age = age;
    // } 
    // eat(){
    //     return `${this.name} is eating!`;
    // } 
    constructor (name, age, liveLeft = 9) {
        super(name, age);    //super  is going to call pet constructor and refer to name and age from there to in this cat class
        this.liveLeft = liveLeft;
    }
    meow () {
        return "MWOWW!!"
    } 
};

class Dog extends Pet{
    // constructor (name, age) {
    //     this.name = name;
    //     this.age = age;
    // } 
    // eat(){
    //     return `${this.name} is eating!`;
    // }  
    bark () {
        return "WOOF!!"
    }
    eat () {
        return `${this.name} scarfs his food!`
    }
}



//without extends
// in console
// const licy = new Cat ('licy', 9);
// licy.eat();
// licy.meow();

// const look = new Dog ('look', 13);
// look.eat();
// look.bark();
// result == Dog {} empty

// with extends 
//licy.eat();
//'licy is eating! //since it doesnt have its own eat function so it gets one from pet class
//licy.meow();
// 'MWOWW!!'

// look.eat();
// 'look scarfs his food!'  //actually it gives look scarfs his food! since eat function is define in dog class itself but if there was no eat class in dog then it checks upto pet class and call eat function
// look.bark();
// 'WOOF!!'