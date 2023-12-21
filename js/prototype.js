let obj={name:"Priyanka", city:"Pune"};
let pro={qual:"BE"};
let pro2={hobby:"bkc"}

Object.setPrototypeOf(obj,pro);
Object.setPrototypeOf(pro,pro2);

console.log(
    Object.getPrototypeOf(obj),
    Object.getPrototypeOf(pro),
    Object.getPrototypeOf(pro2)
    
)
console.log(obj.city, obj.hobby, obj.name, obj.qual);