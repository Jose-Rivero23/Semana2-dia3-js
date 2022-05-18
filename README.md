# Semana2-dia3-js

se puede importar de forma default solo para un objeto o por nombres copiandolo de la manera normal.
para cambiar los nombres sería dentro del import poner as ej {push as x} se llamaria x.

al usar npm test si ponemos al final el como un filtro podría ser npm test clas y se ejecutaran todos los archivos que tengan el clas en su nombre.

al momento de llamar objetos con propiedades como por ejemplo

usuario = { name: {first-name:"jose", second-name "armando"} , age:10};

si llamo a usuario.name.first-name saldra jose, pero al llamar name.name.second-name y la person no tiene segundo nombre se puede usar el operador elvis que es ?, en este caso ponemos una condicion de que si el valor anterior en este caso name es algo diferente de un objeto solo me envie su valor

teniendo en cuenta qu podría ser usuario = { name: "ricardo" , age:85};
usuario.name?.second-name
daria ricardo.

structuredClone(value)
clona los objetos en su forma total asi tengan asignados otros objetos como valores dentro del mismo.

nvm es el controlador de versiones del node lo puedo descargar en caso de querre cambiar las verisones de node.
