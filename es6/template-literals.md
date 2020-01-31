# Template literals

Los template literals son cadenas de strings que permiten expresiones incrustadas.

```javascript
// No literal
var presentarse = (nombre, edad) => {
  console.log('Hola soy ' + nombre + 'y tengo' + edad + 'años');
}
// Template Literal
var presentarseLiterals = (nombre, edad) => {
  console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}
// Multilinea no literal
var html = (contenido, estilos) => {
  return '<table style="' + estilos.table + '">' +
    '<tr>' +
      '<td style="' + estilos.td + '">' +
        '<p style="' + estilos.p + ">' +
          contenido +
        '</p>' +
      '</td>' +
    '</tr>' +
  '</table>';
}
// Multilinea literal
var htmlLiterals = (contenido, estilos) => {
  return `<table style="${estilos.table}">
    <tr>
      <td style="${estilos.td}">
        <p style="${estilos.p}">
          ${contenido}
        </p>
      </td>
    </tr>
  </table>`;
}
```
