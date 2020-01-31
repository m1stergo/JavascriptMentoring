# Variables
Es6 agrega los tipos de variables `let` y `const`

## Let
Tiene un scope local y puede reasignarse
```javascript
let color = 'rojo';
color = 'negro';
console.log(color) // negro
```
## Const
Tiene un scope local y no puede reasignarse, es una constante
```javascript
const color = 'rojo';
color = 'negro'; // error, no se puede asignar un valor a una constante
```

## Block Scope
Ejemplo usando var
```javascript
var nombre = "Elias";

{
  var nombre = "PEPE";
}

console.log(nombre); // "PEPE"
```

Usando let
```javascript
var nombre = "Elias";
var apellido = "Torres";

{
  // block scope
  // antes solo las funciones creaban un scope,
  // ahora usando {} y let o const podemos crear un nuevo scope
  let nombre = "PEPE";
  const apellido = "SANCHEZ"
}

console.log(nombre); // "Elias"
console.log(apellido) // "Sanchez"
```
