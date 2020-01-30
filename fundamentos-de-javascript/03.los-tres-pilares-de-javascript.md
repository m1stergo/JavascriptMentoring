# Tres Pilares de Javascript

1. Tipos y Conversion de tipos (COERCION)
2. Scope / Closures
3. This / Prototypes


## 1. Tipos y Conversion de tipos (COERCION)
Ya hemos visto los tipos de javascript en los principios basicos, ahora veamos la conversion de tipos.

---
Cuando uno de los valores es un string, javascript implicitamente convierte el resto a strings,

```javascript
var msg1 = "Faltan ";
var dias = 235;
var msg2 = " dias para la primavera";
console.log(msg1 + dias + msg2); // "Faltan 235 dias para la primavera"
```

|||
|-|-|
| Number + Number | Number |
| Number + String | String |
| String + Number | String |
| String + String | String |

Pero no siempre podemos fiarnos de que hara lo "esperado" con otros tipos de datos

```javascript
// to Number
Number("1"); // 1
Number(true); // 1
Number(false); // 0
Number(null) // 0
Number([]); // 0
Number(undefined) // NaN mmm?
Number({}); // NaN mmm?

// to String
String(1); // "1"
String([]); // ""
String([1,2,3, {}]); "1,2,3,[object Object]"
String(true) // "true"
String(null) // "null"
```

### NaN (not a number)
un valor es NaN, cuando es el resultado de una operacion matematica que no resultó en un numero

```javascript
var saludo = "hola";
var calculo = saludo / 2 // NaN
Number.isNan( calculo ) // true
Number.isNan( saludo ) // false
```

### Boleanos y la conversion de tipos.

Cuando aplicamos un condicional, la condicion tiene que resolver en un booleano, para ello aplica una conversion de tipos.

```javascript
if ( resuelve_un_booleano ) {

}
```
Los siguientes valores seran interpretados como falso 'Falsy' o verdadero 'Truthy'

|||
|-|-|
| Falsy | Truthy |
| "" | "foo" |
| 0, -0 | 23 "
| null | {a:1} |
| NaN | true |
| false | [] |
| undefined | ... todo lo demas se vuelve true |

Es por ello que debemos tener especial atención al realizar este tipo de condiciones, ya que la conversion a veces puede ser un poco traicionera

```javascript
var colores = [];

if (colores) {
  console.log('hay colores');
}
// imprime hay colores incluso cuando el array esta vacio

```
Los operados de > y <, hacen una conversion a Number

```javascript
if ("2" > 1) {
  // nunca ingresa ya que es falso porque:
  // Number("2") > 1
}
```


### Igualdad == vs ===

Hay una creencia popular que dice que:
> == es una comparacion vaga, ya que no valida los tipos

Mientras que el triple igual si.
Por lo tanto, es una mala practica usar el doble igual ya que `no sabemos los tipos de valores que puede haber en los datos de nuestra aplicacion.`

Lo que el triple igual nos esta diciendo entonces es que: como mi codigo es malo y no tengo control sobre los datos que estoy trabajando me protejo usando el triple igual.

**El doble igual no es vago.**

Lo que realmente pasa es lo siguiente

> == realiza una conversion de tipos y luego chequea los valores

> === no permite coercion, los tipos tienen que ser el mismo


Si conocemos los tipos de datos con los que estamos trabajando y la forma en la que javascript realiza la conversion de tipos, deberiamos usar el doble igual ya que hace el codigo mas simple


```javascript
var workshop1 = {topic: null};
var workshop2 = {};

// si usamos tiple igual, debemos chequear 4 cosas
if (
  (workshop1.topic === null || workshop.topic === undefined) &&
  (workshop2.topic === null || workshop.topic === undefined)
) {
  // ...
}

// Si usamos el doble igual, javascript realiza la conversion de tipos donde undefined es lo mismo que null

if (
  workshop1.topic == null && workshop2.topic == null
) {
  // ...
}
```

---
## 2. Scope & Closures

en Javascript, los `{}` crean un scope.

```javascript
// variable declarada en el scope global
var mentor = "Elias";

// funcion declarada en el scope global
function otroMentor() {
  // nuevo scope
  mentor = "Gonzalo";
  topic = "React";
}

otroMentor(); // hola
console.log(mentor); // Gonzalo
console.log(topic); // undefined

```

Porque mentor es Gonzalo y topic undefined?

Lo que sucede, es lo siguiente:

```javascript
otroMentor(); // Al ejecutarse crea un nuevo scope.
{
  // nuevo scope
  mentor = "Gonzalo";
  // como no utilizamos la palabra var antes de mentor, va a buscar si mentor ya fue declarado y actualizar el valor.
  // Entonces, primero busca si mentor existe en este nuevo scope y si no existe,lo busca en su scope antecesor y asi sucesivamente.
  // cuando encuentra mentor, lo sobre-escribe con el nuevo valor, por eso ahora,mentor del scope global es "gonzalo"
  topic = "React";
  // En el caso de topic, realiza lo mismo, pero no al no encontrar nada tanto en el nuevo scope como en su antecesor, entiende que la variable debe ser declarada y la delcara en el nuevo scope.
}

console.log(mentor); // mentor esta en el scope global, y desde otro mentor fue actualizado.
console.log(topic); // topic fue creado en el scope de otroMentor(), no tenemos acceso desde afuera
```

> En Javascript, las funciones tienen acceso a su scope antecesor, es decir que se puede ir de adentro hacia afuera. Sin embargo, no podemos ir de afuera hacia adentro


### Execution Context
Que es el contexto de ejecucion?

Cada vez que javascript ejecuta una funcion, crea un nuevo contexto de ejecucion
en el que declara variables y ejecuta nuevas funciones

```javascript
function primero () {

  var nombre = "Elias"

  function segundo () {
    var color = "rojo"

    function tercero () {
      console.log(nombre, color);
    }

    tercero()
  }

  segundo();
}

primero() // Elias, rojo
```

Veamos:


* `primero()` crea un contexto de ejecucion
* * `segundo()`  crea otro contexto de ejecucion
* * * `tercero()` crea otro contexto de ejecucion
* * * termina de ejecutar tercero y elimina el contexto de ejecucion
* * termina de ejecutar segundo() y elimina el contexto de ejecucion
* termina de ejecutar primero y elimina el contexto de ejecucion

Cada contexto de ejecucion utiliza un espacio en memoria, es por ello que al terminarse las ejecuciones, se elimina ese contexto para dar lugar a nuevos contextos y no colapsar la memoria

Podriamos pensar entonces que cuando estamos en `tercero()`, segundo y primero todavia estan en ejecucion y es por ello que desde tercero podemos acceder al scope de los ancestros y obtener nombre y color.

Sin embargo, veamos el siguiente caso:

```javascript

function primero () {
  var variableLocal = "elias";
  return function segundo () {
    return variableLocal;
  }
}

var getVariableLocal = primero();
// primero() crea un contexto de ejecucion, devuelve la funcion segundo
// termina de ejecutar primero y elimina el contexto de ejecucion

// ya no hay contextos de ejecucion en marcha
// sin embargo, al llamar a getVariableLocal
getVariableLocal() // imprime Elias
// como es posible, si el contexto de primero ya no existe ?
```

Esa caracteristica, recibe el nombre de **closure**

Es cuando una funcion "recuerda" las variables que estaban por fuera de su escope, incluso cuando es pasada a otro contexto.


## 3 this / Prototypes

Habiendo visto los contextos de ejecucion, podemos entender el funcionamiento de `this`.

### this

this, es un tipo de valor que hace referencia al contexto de ejecucion en el que fue llamado.


```javascript
var mentor = {
  nombre: "Elias",
  saludar: function () {
    console.log('Hola soy ' + this.nombre);
  }
}

mentor.saludar(); // Hola soy Elias
```
El objeto mentor es el contexto donde fue llamado saludar, por ello this apunta a mentor y this.nombre es equivalente a mentor.nombre (Elias)

Veamos entonces el siguiente caso:

```javascript
var mentor = {
  nombre: "Elias",
  saludarConDelay: function () {
    setTimeout(function () {
      console.log('Hola soy ' + this.nombre)
    }, 1000);
  },
  saludarConDelay2: function () {
    setTimeout(function () {
      console.log('Hola soy ' + this.nombre)
    }.bind(this), 1000);
  }
}

mentor.saludarConDelay() // Hola soy undefined
// el contexto de saludarConDelay es mentor, pero dentro, llamamos a setTimeout, setTimeout es una variable global de javascript, por lo que su contexto entonces es el global.
// es por ello que al buscar this.nombre no existe, porque this apunta al contexto global

mentor.saludarConDelay2() // Hola soy elias
// aqui, estamos haciendo uso del metodo .bind
// bind nos permite decirle a una funcion cual va a ser su contexto
```

**Explicit binding (yo le digo cual es el contexto)**
this puede ser llamado con diferentes contextos, lo cual hace flexible y reusable.

```javascript
var usuario1 = {
  nombre: "Elias",
}
var usuario2 = {
  nombre: "PEPE",
}

function saludar () {
  console.log('hola soy ' + this.nombre);
}

saludar() // hola soy undefined

// BIND
var nuevoSaludo = saludar.bind(usuario1);
nuevoSaludo() // hola soy Elias

// CALL
saludar.call(usuario2); //  hola soy PEPE

// APPLY
saludar.apply(usuario1) // hola soy Elias

```

Usar `.bind ()` cuando queremos que una función se llame más tarde con un determinado contexto, útil en eventos.

Usar .call () o .apply () cuando querramos invocar la función de inmediato con el nuevo contexto.

Call vs Apply:


```javascript
var usuario1 = {
  nombre: "Elias",
}

function saludar (fraseDeInicio, fraseDeCierre) {
  console.log(fraseDeInicio + ' ' + this.nombre + ' ' + fraseDeCierre);
}

// Call invoca la función y le permite pasar argumentos uno por uno.
saludar.call(usuario1, 'hola soy', 'y me gusta el pan');

// Apply invoca la función y le permite pasar argumentos como un array.
saludar.apply(usuario1, ['hola soy', 'y me gusta el pan'])

```



### Prototipos

El prototipo es un objeto al que otras instancias van a consultar para obtener valores.


```javascript
function Workshop(mentor) {
  this.mentor = mentor;
}

Workshop.prototype.preguntar = function (pregunta) {
  console.log(this.mentor, pregunta);
}

var vueJs = new Workshop("Elias"); // la palabra new invoca la funcion Workshop, y el objeto que se crea estara linkeado a al prototipo de workshop.
var reactJs = new Workshop("Santiago");

vueJs.preguntar("Se puede usar vue con jquery?");
// Elias se puede usar vue con jquery?

reactJs.preguntar('Es react mejor que vue?');
// Santiago Es react mejor que vue?

```
Es importante ver que vueJs y reactJs no tienen declarado un metodo `preguntar`

Sin embargo, cuando ejecutamos el metodo, obtenemos la respuesta esperada (como si tuviera el metodo declaro). Lo que sucede entonces, es que al no encontrar el metodo , lo va a buscar en su prototipo.
