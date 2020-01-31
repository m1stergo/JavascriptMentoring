
# Arrow Functions

```javascript
// funcion normal
const saludar = function (nombre) {
  return "hola me llamo" + nombre;
}

// funcion con arrow
const saludarConArrow =    (nombre) => {
  // --------------------^ -------- ^
  // se elimina la palabra function y se agrega la flecha
  return "hola me llamo" + nombre;
}

// si la cantidad de parametros que recibe es 1, no hace falta colocar parentesis
const saludarConArrow1 = nombre => {
  // -------------------^------^
  return "hola me llamo" + nombre;
}

// si el cuerpo de la funcion es de una sola linea,
// no hace falta usar llaves, tiene return automatico
const saludarConArrow2 = nombre => "hola me llamo" + nombre;
```

Mas alla de lo "estetico", el cambio de mayor impoacto es el comportamiento del `this`

## this
Las arrow funcion mantienen el scope del this.
Recordas que cuando teniamos una funcion dentro de otra, podiamos perder el scope del this y teniamos que usar alguno de estos `bind` `call` `apply`, con los arrow functions ya no es necesario.

```javascript
var workshop = {
  nombre: "Elias",
  saludarConDelay: function () {
    setTimeout(function () {
       console.log("El mentor es " + this.nombre);
    }, 1000);
  },
  saludarConDelayArrow: function () {
    setTimeout(() => {
      // -------- ^ arrow
      console.log("El mentor es " + this.nombre);
    }, 1000);
  }
}


workshop.saludarConDelay(); // undefined
workshop.saludarConDelayArrow(); // elias

```

