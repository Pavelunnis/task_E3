function createObjectWithoutPrototype() {
    return Object.create(null);
}


const objWithoutProto = createObjectWithoutPrototype();

console.log(objWithoutProto);
console.log(Object.getPrototypeOf(objWithoutProto));
console.log(objWithoutProto.toString);