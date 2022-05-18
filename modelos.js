let president = {
    name: 'Pooh',
    next: 'hola',
};

president.next = {
    name: 'Padintong',
    next: president,
};
console.log(president);

// es posible crear un bucle dentor del objeto si una de sus propiedades a`punta hacia el obejto como tal
let presi = {
    name: 'Jose',
};
presi.next = presi;
console.log(presi);

const noMutar = (obj) => {
    let temp = { ...obj };
    // ... operador para destructurizar
    // let temp = structuredClone(obj);
    temp.name = 'Armando';
    return temp;
};

const original = {
    name: 'Jose',
    age: 22,
};

console.log(noMutar(original));
console.log(original);
