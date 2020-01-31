# Destructuring

Es una expresión de JavaScript que permite desempaquetar valores de arrays o propiedades de objetos en variables distintas.

```javascript
// sin destructuring
var mentor = { nombre: 'Elias', apellido: 'Torres'};
var nombre = mentor.nombre;
var apellido = mentor.apellido;

// con destructuring
var {nombre, apellido} = mentor; // puede leerse como obten nombre y apellido de mentor.

```
### Asignacion
``` javascript
// usamos var para declarar
var [uno, dos] = [1, 2];

// sin var para asignar
[uno, dos] = ["es 1", "es 2"];
console.log(uno) //  "es 1"
console.log(dos) // "es 2"
```

### Spread Operator
`...`

Este simbolo nos permite obtener lo que seria "el resto"

```javascript
var [a, ...b] = [1, 2, 3, 4];
// puede leerse como, la posicion 0 guardala en a
// el resto en b
console.log(a) // 1
console.log(b) // [2, 3, 5]
```

Veamos un ejemplo util de destructuring para hacer un swap:
queremos que lo que esta en A pase a B y lo de B a A

**sin destructuring:**
```javascript
var A = 1; var B = 2;
// tenemos que crear una variable auxiliar `temp` para guardar el valor de A, para luego asignarlo a B
var temp = A;
var A = B;
var B = temp;
```

**con destructuring**
```javascript
var A = 1; var B = 2;
[a, b] = [b, a];
```

Otro ejemplo de destructuring, pero esta vez yendo mas profundo

**Deep**
```javascript
[a, [b, [c, d]]] = [1, [2, [3, 4]]];
```


