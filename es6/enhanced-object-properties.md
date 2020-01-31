
# Enhanced object properties

ES6 hace que la declaración de Objetos literales sea concisa y, por lo tanto, más fácil. 
Las tres formas principales en que lo hace son:

Proporciona una sintaxis abreviada para inicializar propiedades de variables.
Proporciona una sintaxis abreviada para definir métodos de función.
Permite la capacidad de tener nombres de propiedades calculados en una definición literal de objeto.
Examinemos cada uno de ellos.

**Objetos**
```javascript
function getLaptop(make, model, year) {
  return {
    make: make,
    model: model,
    year: year
  }
}
```
Un tanto repetitivo no?

Con es6, podemos escribirlo asi

```javascript
function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}
```

**Metodos**
```javascript
function getLaptop(make, model, year) {
  return {
    sayModel : function() {
      return model;
    }
  }
}
```

En es6 podemos escribirlo asi:
```javascript
function getLaptop(make, model, year) {
  return{
    sayModel() {
      return model;
    }
  }
}
```

**Propiedades Calculadas**

La notación de corchetes nos permite acceder a una propiedad usando expresiones.
Los nombres de propiedad calculados nos permiten escribir una expresión entre corchetes en lugar del nombre de propiedad normal. Lo que evalúa la expresión se convertirá en el nombre de la propiedad. Esto significa que podemos hacer esto:

```javascript
var name = "make";
const laptop = {
    [name]: "Apple"
}

console.log(laptop.make);//"Apple"
```
