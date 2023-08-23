const cat = {
    name: 'Blake',
    color: 'Grey',
    breed: 'dvornyaga',
    meow() {
        console.log(`${this.name} says meowwwww`);
    }
}

console.log(cat.meow());