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
