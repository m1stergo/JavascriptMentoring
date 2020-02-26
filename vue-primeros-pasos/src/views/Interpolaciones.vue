<template>
  <div class="view content">
    <h1>Sintaxis del Template</h1>
    <p>Vue.js utiliza una sintaxis de plantilla basada en HTML que le permite vincular el DOM con los datos de la instancia de Vue</p>
    <p>Detras de escenario, Vue compila las plantillas en algo conocido como <code>Virtual DOM</code> en combinación con el sistema de reactividad, esto le permite calcular de manera inteligente la cantidad mínima de componentes para volver a renderizar y aplicar la cantidad mínima de manipulaciones DOM cuando cambia el estado de la aplicación.</p>

    <h2>Interpolaciones</h2>
    <h4><span class="tag is-success">Texto</span></h4>
    <p>La forma mas basica de vincular el dom con los datos de Vue, es usando la sintaxis "Mustache" (doble llaves)</p>

    <Code :code="`<span>Message: {{ msg }}</span>`" mode="text/html" />

    <p>Los mustaches seran remplazados por el valor de la propiedad <code>msg</code> correspondiente al data del objeto. También seran actualizados cada vez que la propiedad cambie</p>

    <h4><span class="tag is-success">HTML</span></h4>
    <p>Los mustaches interpretan los datos como texto plano, para poder renderear html vamos a necesitar de un atributo especial de vue <code>v-html</code></p>

    <Code :code="temp" mode="text/html" />

    <p>Veamos que pasa</p>

    <div class="box">
      <p>Usando mustaches: {{ rawHtml }}</p>
      <p>Usando v-html: <span v-html="rawHtml" /></p>
    </div>

    <h4><span class="tag is-success">Atributos</span></h4>
    <p>Los mustaches no pueden utilizarse dentro de los atributos html</p>
    <Code :code="atributosCode" mode="text/html" />
    <p>Para poder cincular atributos html con datos de vue, vamos a necesitar otro atributo especial <code>v-bind</code></p>
    <Code :code="atributosBind" mode="text/html" />
    <p>Otros ejemplos de binding de atributos</p>
    <Code :code="atributosBindOtros" mode="text/html" />
    <h2>Expresiones</h2>
    <p>Dentro de los mustaches o bindings se puede imprimir una variable, ejecutar funciones, acceder a propiedades de objetos, array, etc.</p>

    <Code :code="expresionesCode" mode="text/html" />

    <div class="columns">
      <div class="column is-half">
        <div class="message is-info">
          <div class="message-header">Juguemos!</div>
          <div class="message-body">
            <p>Los recuadros play (derecha) son interactivos, proba apretando el botton de toggle!</p>
            <p>A la derecha del recuadro figura el nombre del archivo, en este caso 'Expresiones.vue'</p>
            <p><b>Y si lo revisamos?</b></p>
            <p>En los archivos de nuestra app, busquemos: </p>
            <p><code>play/Expresiones.vue</code></p>
            <p>Proba hacer cambios y veamos como se actualiza la vista</p>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="message is-warning">
          <div class="message-header"><span class="tag">PLAY</span> Expresiones.vue</div>
          <div class="message-body">
            <PlayExpresiones />
          </div>
        </div>
      </div>
    </div>


    <h2>Excelente!</h2>
    <p>Recorda entonces que cada vez que veas un recuadro play, vas a encontrar su archivo en <code>play/Nombre.vue</code></p>
    <p>La idea es revises el archivo y veas como funciona vue, no tengas miedo en realizar cambios y si algo falla <b>ctrol + z</b>!</p>
  </div>
</template>

<script>
import PlayExpresiones from '../../play/Expresiones.vue';

export default {
  name: 'Expresiones',
  components: {
    PlayExpresiones
  },
  data() {
    return {
      rawHtmlCode: `// nuestro data
{
  rawHtml: '<span style="color:red">Este texto deberia ser rojo</span>'
}
`,
      rawHtml: '<span style="color:red">Este texto deberia ser rojo</span>',
      temp: `<p>Usando mustaches: {{ rawHtml }}</p>
<p>Usando v-html: <span v-html="rawHtml"></span></p>`,
      atributosCode: `<a href="{{ url }}">Link</a> <!-- ERROR -->`,
      atributosBind: `<a v-bind:href="url"></a>`,
      atributosBindOtros: `<div v-bind:id="getId"></div>
<div v-bind:style="divStyles"></div>`,
      expresionesCode: `<p>{{ greetings }}</p>
<p v-html="1 + 1"></p>
<p v-text="'<h1>' + 'hola mundo' + '</h1>'"></p>
<p v-bind:style="styles">{{ person.name.toUpperCase() }}</p>
<p>{{ JSON.stringify(person) }}</p>
<p>
  <span class="tag" v-bind:class="isDanger ? 'is-danger': 'is-primary'">
    {{isDanger ? 'OFF' : 'ON'}}
  </span>
</p>`,
    };
  }
}
</script>
