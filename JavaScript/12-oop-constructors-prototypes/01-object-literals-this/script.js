const rectangle = {
    name: 'Rectangle 1',
    width: 20,
    height: 10,
    // We can add methods to an object and use this keyword to access the properties of the object 
    area: function() {
        return this.width * this.height;
    },
};
console.log(rectangle.area());


// Objects literals are great for creating objects that only need one instance. If we needed two Rectnagles, we would have to create two Objects.

const rectangle2 = {
    name: 'Rectangle 2',
    width: 30,
    height: 20,
    area: function() {
        return this.width * this.height;
    },
};

console.log(rectangle2.area());